// Importing HTML files in Express

// METHOD - 1 

// const express = require('express');
// const path = require('path'); 
// const app = express();

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });

// METHOD - 2

const express = require('express');
const app = express();

app.use(express.static('public'));
// app.use        => run as middleware , it runs before routes
// express.static => it reads file directly in that public folder

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});