//Error Handling

const PORT = 5000;
const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
    const home = 'Home Page';
    next(home);
})

app.get('/about', (req,res,next) => {
    const about = 'About Page';
    next(about);
})

app.get('/contact', (req,res,next) =>{
    const contact = 'Contact Page';
    next(contact);
})

app.get('/error', (req,res,next) => {
    const error = new Error('Error Page');
    next(error);
})

app.use((err,req,res,next)=>{
    if(err.name){
        res.send({
            name:err.name,
            message:err.message,
            stack:err.stack
        });
    }
    else{
        res.send(err);
    }
})

app.listen(PORT, ()=>{
    console.log('Running Successfully');
})