// Example - 1

// const http = require("http")

// http
// .createServer((req , res) => {
//     res.statusCode = 200;
//     res.end()
// })
// .listen(5000)


// Example - 2

// const http = require("http")

// const server = http.createServer((req , res) => {
//     res.statusCode = 200;
//     res.end()
// })

// server.listen(5000 , () => {
//     console.log("Server Running Successfully!")
// })


// Example - 3

// const http = require("http")

// const server = http.createServer((req , res) => {
//     res.statusCode = 200;
//     res.setHeader("content-type" , "text/html")
//     res.end()
// })

// server.listen(5000 , () => {
//     console.log("Server Running Successfully!")
// })


// Example - 4

// const http = require("http")

// const server = http.createServer((req , res) => {
//     res.statusCode = 200;
//     res.setHeader("content-type" , "text/html")
//     // res.end("Hello")
//     // res.end("<h1>Hello</h1>")
//     res.end(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Document</title>
//         </head>
//         <body>

//             <h1>Hello!</h1>
            
//         </body>
//         </html>
//         `)
// })

// server.listen(5000 , () => {
//     console.log("Server Running Successfully!")
// })
