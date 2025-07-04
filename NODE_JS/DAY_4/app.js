const http = require("http")
const querystring = require("querystring")

const server = http.createServer((req , res) => {
    if(req.url === "/"){
        res.statusCode = 200
        res.setHeader("content-type" , "text/html")
        res.end(`
            <div>
                <a href="/home" >Home</a>
                <a href="/about" >About</a>
                <a href="/contact" >Contact</a>
                <a href="/form" >Register</a>
            </div>
            `)
    }
    else if(req.url === "/home"){
        res.statusCode = 200
        res.setHeader("content-type" , "text/html")
        res.end(`<h1>Home Page</h1>`)
    }
    else if(req.url === "/about"){
        res.statusCode = 200
        res.setHeader("content-type" , "text/html")
        res.end(`<h1>About Page</h1>`)
    }
    else if(req.url === "/contact"){
        res.statusCode = 200
        res.setHeader("content-type" , "text/html")
        res.end(`<h1>Contact Page</h1>`)
    }
    else if(req.url === "/form"){
        res.statusCode = 200
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
        res.statusCode = 200
        res.setHeader("content-type" , "text/html")

        let value = ""
        req.on("data" , (a) => {
            // console.log(querystring.parse(a.toString()))
            value = querystring.parse(a.toString())
            // console.log(value)
            res.end(`
                <div>
                    <h1>username : ${value.username}</h1>
                    <h1>password : ${value.password}</h1>
                </div>
                `)
        })

        // res.end(`<h1>Form Submitted!</h1>`)
    }
    else{
        res.statusCode = 404
        res.setHeader("content-type" , "text/html")
        res.end(`<h1>Error Page</h1>`)
    }
})

server.listen(5000 , () => {
    console.log("working!")
})