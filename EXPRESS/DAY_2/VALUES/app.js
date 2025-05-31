const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public" , 'index.html'));
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.send(`<h1>Thanks ${name}, your email is ${email}</h1>`);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});