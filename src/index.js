const express = require('express');
const config = require('config');

const PORT = process.env.PORT || 8080;

// const ido = config.get('ido')
// const test = config.get('test')

// console.log(ido, test);

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html', {  }, null);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));