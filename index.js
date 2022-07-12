
const express = require('express');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('/', (req, res) => {
    let data = fs.readFileSync('./views/index.html').toString();
    res.send(data);
});


app.listen(port, () => {
    console.log('server is running at port 3000.... ');
});