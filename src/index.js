const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
    res.sendFile('./pages/index.html');
})

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));