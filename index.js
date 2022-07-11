
const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    let data = fs.readFileSync('index.html').toString();
    res.send(data);
});


app.listen(3000, () => {
    console.log('server is running at port 3000.... ');
});