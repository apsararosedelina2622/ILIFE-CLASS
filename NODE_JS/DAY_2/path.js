// Example - 1

// const path = require("path")

// // const filepath = path.join("assets")
// // const filepath = path.join("assets" , "images")
// // const filepath = path.join("assets" , "images" , "img.jpg")
// // const filepath = path.join(__dirname)
// // const filepath = path.join(__dirname , "assets")
// // const filepath = path.join(__dirname , "assets" , "images")
// const filepath = path.join(__dirname , "assets" , "images" , "img.jpg")

// console.log(filepath)


// Example - 2

// const path = require("path")

// // const filepath = path.extname("example.html")
// const filepath = path.extname("example.js")

// console.log(filepath)


// Example - 3

const http = require("http")
const file = require("fs")
const path = require("path")

const filepath = path.join(__dirname , "index.html")

file.writeFileSync(filepath , "Hello!")

const document = file.readFileSync(filepath , "utf8") 

const server = http.createServer((req , res) => {
    res.statusCode = 200;
    res.setHeader("content-type" , "text/html")
    res.end(document) 
})

server.listen(5000 , () => {
    console.log("Server Running Successfully!")
})