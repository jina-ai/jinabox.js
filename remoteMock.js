const express = require('express')
const cors = require('cors');
const app = express();

const PORT = 3120;

app.use(cors());
app.use(express.static('./library'));

app.listen(PORT, function () {
	console.log('server listening on port', PORT)
})