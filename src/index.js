const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html', {  }, null);
})

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));