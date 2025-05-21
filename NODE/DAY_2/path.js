// const path = require("path")

// const filePath = path.join("assets")
// const filePath = path.join("assets" , "images")
// const filePath = path.join("assets" , "images" , "img.jpg")
// const filePath = path.join(__dirname)
// const filePath = path.join(__dirname , "assets")
// const filePath = path.join(__dirname , "assets" , "images")
// const filePath = path.join(__dirname , "assets" , "images" , "img.jpg")

// const filePath = path.extname("example.html")
// const filePath = path.extname("img.jpg")

// console.log(filePath)


const http = require("http")
const path = require("path")
const fs = require("fs")

const filePath = path.join(__dirname , "index.html")

fs.writeFileSync(filePath , `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1>Hello</h1>
    
</body>
</html>`)

const document = fs.readFileSync(filePath , "utf8")

const server = http.createServer((req , res) => {
    res.statusCode = 200;
    res.setHeader("content-type" , "text/html")
    res.end(document)
})

server.listen(5000 , () => {
    console.log("Server Running Successfully!")
})