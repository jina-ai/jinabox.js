const express = require('express')
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/search', async function (req, res) {
	console.log('\nGET at /search');

});