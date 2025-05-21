// const http = require("http")
// const path = require("path")
// const fs = require("fs")

// const filePath = path.join(__dirname , "index.html")

// fs.writeFileSync(filePath , `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>

//     <h1>Hello</h1>
    
// </body>
// </html>`)

// const document = fs.readFileSync(filePath , "utf8")

// const server = http.createServer((req , res) => {
//     res.statusCode = 200;
//     res.setHeader("content-type" , "text/html")
//     res.end(document)
// })

// server.listen(5000 , () => {
//     console.log("Server Running Successfully!")
// })



const http = require("http")

const server = http.createServer((req , res) => {
    // res.statusCode = 200;
    // res.setHeader("content-type" , "text/html")
    // res.end()
    if(req.url === "/"){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end("<h1>Home Page</h1>")
    }else if(req.url === "/about"){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end("<h1>About Page</h1>")
    }else if(req.url === "/form"){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end(`
            <h1>Form Page</h1>
            <form action="/success" method="POST">
                <input type="text" >
                <input type="submit">
            </form>
            `)
    }else if(req.url === "/success" && req.method === "POST"){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end(`<h1>Form Submitted</h1>`)
    }else{
        res.statusCode = 404;
        res.end("Error!")
    }
})

server.listen(5000 , () => {
    console.log("Server Working!")
})