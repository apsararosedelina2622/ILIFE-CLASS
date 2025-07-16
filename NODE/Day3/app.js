// const http = require("http")

// const server = http.createServer((req , res) => {
//     if(req.url === "/"){
//         res.statusCode = 200
//         res.setHeader("content-type" , "text/html")
//         res.end(`<h1>Home Page</h1>`)
//     }
//     else if(req.url === "/about"){
//         res.statusCode = 200
//         res.setHeader("content-type" , "text/html")
//         res.end(`<h1>About Page</h1>`)
//     }
//     else if(req.url === "/contact"){
//         res.statusCode = 200
//         res.setHeader("content-type" , "text/html")
//         res.end(`<h1>Contact Page</h1>`)
//     }
//     else if(req.url === "/form"){
//         res.statusCode = 200
//         res.setHeader("content-type" , "text/html")
//         res.end(`<form action="/submit" method="POST">
//                     <input type="text" >
//                     <input type="submit" >
//                  </form>`)
//     }
//     else if(req.url === "/submit" && req.method === "POST"){
//         res.statusCode = 200
//         res.setHeader("content-type" , "text/html")
//         res.end(`<h1>Form Submitted Successffully!</h1>`)
//     }
//     else{
//         res.statusCode = 404
//         res.setHeader("content-type" , "text/html")
//         res.end(`<h1>Error Page</h1>`)
//     }
// })

// server.listen(5000 , () => {
//     console.log("working!")
// })



const http = require("http")

const server = http.createServer((req , res) => {
    try{
        if(req.url === "/"){
            res.statusCode = 200
            res.setHeader("content-type" , "text/html")
            res.end("Home Page")
        }
        else if(req.url === "/error"){
            res.statusCode = 200
            throw new Error("Something went worng!")
            // var HOME = "HELLO"
            // res.end(HOME)
            res.end("ERROR")
        }
        else{
            res.statusCode = 404
            res.end("Error Page")
        }
    }
    catch(err){
        res.statusCode = 404
        res.end(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
})

server.listen(5000 , () => {
    console.log("ok!")
})