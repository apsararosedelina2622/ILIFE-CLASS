const http = require("http")

const server = http.createServer((req , res) => {
    if(req.url === "/"){
        res.statusCode = 200;
        res.end(`<h1>Home page</h1>`)
    }
    else if(req.url === "/about"){
        res.statusCode = 200;
        res.end(`<h1>About page</h1>`)
    }
    else{
        res.statusCode = 404;
        res.end(`<h1>Error page</h1>`)
    }
})

server.listen(5000)