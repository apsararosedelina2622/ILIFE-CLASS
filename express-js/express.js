const express = require('express');

const app = express();

app.get('/index',(req,res) => {
    res.statusCode =200;
    res.setHeader('Content-type','text/html');
    res.send(`<h1>Home Page</h1>`);
})

app.get(['/about','/about_us'],(req,res) => {
    res.statusCode =200;
    res.setHeader('Content-type','text/html');
    res.send(`<h1>About Us</h1>`);
})

app.get('/login',(req,res) => {
    res.statusCode =200;
    res.setHeader('Content-type','text/html');
    res.send(`<form action='/ls' method='post'><input type='text' value='User 1'><input type='submit'></form>`);
})

app.post('/ls',(req,res) => {
    res.statusCode =200;
    res.setHeader('Content-type','text/html');
    res.send(`<h1>Login Successfully</h1>`);
})

app.get('/user/:id',(req,res) => {
    res.statusCode =200;
    res.setHeader('Content-type','text/html');
    res.send(`<h1> User Id : ${req.params.id}</h1>`);
})

app.all('*',(req,res) => {
    res.statusCode =404;
    res.send(`<h1>Page Not Found</h1>`);
})

app.listen(5000,() => {
    console.log('Running Successfully');    
})