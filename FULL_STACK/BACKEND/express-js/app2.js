// Error Handling 

const express = require('express');

const app = express();

app.get('/', (req,res,next) => {
    const error = 'Index Page';
    next(error);
})

app.get('/about', (req,res,next) => {
    const error = 'About Page';
    next(error);
})

app.get('/contact', (req,res,next) => {
    const error = 'Contact Page';
    next(error);
})

app.get('/error', (req,res,next) => {
    const error = new Error('Error Page');
    next(error);
})

app.use((err,req,res,next) => {
    if(err.name){
        res.status(404).send({
            name : err.name,
            message : err.message,
            stack : err.stack
        })
    }
    else{
        res.send(err)
    }
})

app.listen(5000, () => {
    console.log('Running Successfully');
})