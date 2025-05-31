const express = require('express');
const app = express();

// Single Route

app.get('/', (req, res) => {
    // res.status(200).end('<h1>Home Page</h1>');
    res.status(200).send('<h1>Home Page</h1>');
});

// Single Route

app.get('/service', (req, res) => {
    res.status(200).send('<h1>Service Page</h1>');
})

// Multiple Route

app.get(['/about', '/about_page'],  (req, res) => {
    res.status(200).send('<h1>About Page</h1>');
});

// Dynamic Route

app.get('/user/:id', (req, res) => {
    res.status(200).send('<h1>User Id: ' + req.params.id + '</h1>');
});

app.get('/contact', (req, res) => {
    res.status(200).send(`
        <form action="/login" method="POST"> 
            <input type="submit" value="Login">
        </form>
    `);
});

// Post Method

app.post('/login', (req, res) => {
    res.status(200).send('<h1>Login Page</h1>');
});

// Error Page

app.all('*', (req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});