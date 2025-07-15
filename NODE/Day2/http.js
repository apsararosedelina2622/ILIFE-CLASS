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

// server.listen(5000)


// const http = require("http")

// const server = http.createServer((req , res) => {
//     res.statusCode = 200
//     res.setHeader("content-type" , "text/html")
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
    <h1>Hiii</h1>
</body>
</html>`)

const filePath = path.join(__dirname , "example.html")

const document = file.readFileSync(filePath)

const server = http.createServer((req , res) => {
    res.statusCode = 200
    res.setHeader("content-type" , "text/html")
    res.end(document)
})

server.listen(5000 , () => {
    console.log("server running successfully!")
})