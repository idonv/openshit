const express = require('express');
const config = require('config');

const PORT = process.env.PORT || 8080;

const conf = config.get('/etc/config/deployment.json')

console.log(conf);

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html', {  }, null);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));