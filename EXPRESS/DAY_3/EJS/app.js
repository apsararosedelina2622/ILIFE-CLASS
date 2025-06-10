const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', name: 'User' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});