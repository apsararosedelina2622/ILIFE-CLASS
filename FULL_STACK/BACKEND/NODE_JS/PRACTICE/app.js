const http = require("http");

const server = http.createServer((req, res) => {
    try {
        if (req.url === "/") {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end("<h1>Welcome to Home Page</h1>");
        } else if (req.url === "/error") {
            throw new Error("Something went wrong!");
        } else {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html");
            res.end("<h1>Page Not Found</h1>");
        }
    } catch (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/html");
        res.end(`<h1>Internal Server Error</h1><p>${err.message}</p>`);
    }
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});