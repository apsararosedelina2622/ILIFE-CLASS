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
//     else if(req.url === "/form"){
//         res.statusCode = 200
//         res.setHeader("content-type" , "text/html")
//         res.end(`<form action="/submit" method="POST">
//                     <input type="text" >
//                     <input type="submit" >
//                 </form>`)
//     }
//     else if(req.url === "/submit" && req.method === "POST"){
//         res.statusCode = 200
//         res.setHeader("content-type" , "text/html")
//         res.end(`<h1>Success Page</h1>`)
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
            res.end("Home")
        }
        if(req.url === "/about"){
            res.statusCode = 200
            res.setHeader("content-type" , "text/html")
            throw new Error("Error Message!")
            res.end("Home")
        }
        else{
            res.statusCode = 404
            res.setHeader("content-type" , "text/html")
            res.end("Error")
        }
    }
    catch(err){
        res.statusCode = 404
        res.end(`<h1>Error Name : ${err.name} , Error Message : ${err.message}</h1>`)
    }
})

server.listen(5000)