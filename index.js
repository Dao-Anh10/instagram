
const express = require('express');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});


app.listen(port, () => {
    console.log('server is running at port 3000.... ');
});