const express = require('express')
const cors = require('cors');
const app = express();
const Jina = require('./jinaClient');

const config = require('./config');

const PORT = 3130;

app.use(cors());
app.use(express.json());

const jina = new Jina(config.jinaURL);

async function testJina(){
	console.log('testing jina...')
	const results = await jina.search(['hello'],10)
	console.log('results: ',results);
}

app.get('/testRoute',async function(req,res){
	res.json({working: true});
})

app.post('/search', async function (req, res) {
	console.log('\nGET at /search');
	const queries = req.body.queries;
	const top_k = req.body.top_k;
	console.log('queries:',queries);
	console.log('top_k:',top_k)
	const results = await jina.search(queries,top_k);
	res.json({results});
});

app.listen(PORT,function(){
	console.log('Jina Search Server listening on port ',PORT);
})