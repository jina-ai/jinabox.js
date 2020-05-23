const express = require('express')
const cors = require('cors');
const app = express();
const Jina = require('./jinaClient');

const config = require('./config');

const PORT = 3130;

app.use(cors());
app.use(express.json({ limit: '2gb' }));

const jina = new Jina(config.jinaURL);

async function testJina() {
	console.log('testing jina...')
	const results = await jina.search(['hello'], 10)
	console.log('results: ', results);
}

app.get('/testRoute', async function (req, res) {
	res.json({ working: true });
})

app.post('/search', async function (req, res) {
	console.log('\nPOST at /search');
	const { data, top_k,inBytes } = req.body;
	console.log('queries:', data);
	console.log('top_k:', top_k);
	console.log('inBytes:', inBytes)
	const results = await jina.search(data, top_k,inBytes);
	console.log(results)
	res.json({ results });
});

app.listen(PORT, function () {
	console.log('Jina Search Server listening on port ', PORT);
})