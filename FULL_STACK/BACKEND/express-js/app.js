const express = require('express');

const app = express();

app.use(express.static('html'));

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/html/indext.html');
})

app.post('/success', (req,res) => {
    res.send(`${JSON.stringify(req.body)}`);
})

app.listen(5000,() => {
    console.log('Running Successfully');
})