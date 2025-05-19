// const http = require("http")

// http.createServer((req , res) => {
//     res.statusCode = 200
//     res.end()
// }).listen(5000)


// const http = require("http")

// const server = http.createServer((req , res) => {
//     res.statusCode = 200
//     res.setHeader("content-type" , "text/html")
//     res.end()
// })

// server.listen(5000 , () => {
//     console.log("Server Running Successfully!")
// })


const http = require("http")

const server = http.createServer((req , res) => {
    res.statusCode = 200;
    res.setHeader("content-type" , "text/html")
    // res.end()
    // res.end("Hello")
    // res.end(`<h1>Hello</h1>`)
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat alias temporibus vitae, illo dolorum debitis minima, consequatur nihil magni aliquid ipsam ad reprehenderit, maiores nemo odit enim illum? Reprehenderit, nobis.</p>
    </body>
    </html>
    `)
})

server.listen(5000 , () => {
    console.log("Server Running Successfully!")
})