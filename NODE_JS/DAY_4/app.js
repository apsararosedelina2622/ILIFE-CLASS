const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); 
    const query = parsedUrl.query;

    res.setHeader(200, {'Content-Type': 'text/html'});
    res.end(`<h1>Hello ${query.name}, age ${query.age}</h1>`);
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});