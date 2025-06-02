// const http = require("http")

// const server = http.createServer((req , res) => {
//     try{
//         if(req.url === "/"){
//             res.statusCode = 200;
//             res.setHeader("content-type" , "text/html")
//             res.end("Home Page")
//         }
//         else if(req.url === "/error"){
//             throw new Error("Something went wrong!")
//         }
//         else{
//             res.statusCode = 404;
//             res.setHeader("content-type" , "text/html")
//             res.end("Error Page")
//         }
//     }
//     catch(err){
//         res.statusCode = 404;
//         res.setHeader("content-type" , "text/html")
//         res.end(`Error!... ${err.message}`)
//     }
// })

// server.listen(5000 , () => {
//     console.log("Running!...")
// })




const http = require("http")
const querystring = require("querystring")

const server = http.createServer((req , res) => {
    if(req.url === "/"){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        // res.end("Hello")
        res.end(`
            <div>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/form">Register</a>
            </div>
            `)
    }
    else if(req.url === "/about"){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end(`<h1>About Page</h1>`)
    }
    else if(req.url === "/contact"){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end(`<h1>Contact Page</h1>`)
    }
    else if(req.url === "/form"){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end(`
            <form action="/submit" method="POST">
                <input type="text" name="username" >
                <input type="text" name="password" >
                <input type="submit" >
            </form>
            `)
    }
    else if(req.url === "/submit" && req.method === "POST"){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        let value = ""
        req.on("data" , (a) => {
            // console.log(a) // chunk
            // console.log(a.toString()) // username=user&password=userpassword
            // console.log(querystring.parse(a.toString())) // { username: 'user', password: 'user123' }

            value = querystring.parse(a.toString())
            // console.log(value)
            var { username , password } = value;
            // console.log(username)
            // console.log(password)
            res.end(`
                <div>
                    <h1>username : ${username}</h1>
                    <h1>password : ${password}</h1>
                </div>
                `)
        })
        // res.end(`<h1>Form Submitted Successfully!</h1>`)
    }
    else{
        res.statusCode = 404;
        res.setHeader("content-type" , "text/html")
        res.end(`<h1>Error Page</h1>`)
    }
})

server.listen(5000 , () => {
    console.log("Server Running!...")
})