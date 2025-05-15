const http = require("http")

const server = http.createServer((req , res) => {
    res.statusCode = 200
    res.setHeader("content-type" , "text/html")
    // res.end()
    // res.end("Hello World!")
    res.end("<h1> Hello World! </h1>")
})

server.listen(5000 , () => {
    console.log("Server Running!")
})