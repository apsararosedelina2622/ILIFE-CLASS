// const file = require("fs")
// file.writeFileSync("index.html" , `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Hii</h1>
// </body>
// </html>`)


// const file = require("fs")
// file.readFile("index.html" , (err , data) => {
//     if(err){
//         console.log("This is Error.")
//     }
//     else{
//         console.log(data.toString())
//     }
// })


// const path = require("path")

// const filepath = path.join("assets" , "images" , "sample.jpg")
// const filepath = path.join(__dirname , "assets" , "images" , "example.png")

// const filepath = path.extname("example.html")
// const filepath = path.extname("example.js")

// console.log(filepath)


// const http = require("http")

// http.createServer((req , res) => {
//     res.statusCode = 200
//     res.end()
// }).listen(5000)


// const http = require("http")

// var server = http.createServer((req , res) => {
//     res.statusCode = 200
//     res.setHeader("content-type" , "text/html")
//     // res.end()
//     // res.end("Hello")
//     res.end(`<h1>Hello</h1>`)
// })

// server.listen(5000 , () => {
//     console.log("server running successfully!")
// })


const http = require("http")
const file = require("fs")
const path = require("path")

file.writeFileSync("example.html" , `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Server Running!</h1>
    <p>lorem ipsum dolor sit amet.</p>
</body>
</html>`)

const filepath = path.join(__dirname , "example.html")

const document = file.readFileSync(filepath)

const server = http.createServer((req , res) => {
    res.statusCode = 200
    res.setHeader("content-type" , "text/html")
    res.end(document)
})

server.listen(5000 , () => {
    console.log("server running!")
})