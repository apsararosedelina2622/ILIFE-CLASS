const express = require('express');

const app = express();

const morgan = require('morgan');

app.get('/', (req,res) => {
    res.send(`Hello`);
})

app.use(morgan('tiny'));

app.listen(5000,() => {
    console.log('Running Successfully');
})