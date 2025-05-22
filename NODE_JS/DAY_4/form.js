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
                <a href="/register">Form</a>
            </div>
            `)
    }
    else if(req.url === "/about"){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end(`
            <div>
                <h1>About Page</h1>
            </div>
            `)
    }
    else if(req.url === "/contact"){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end(`
            <div>
                <h1>Contact Page</h1>
            </div>
            `)
    }
    else if(req.url === "/register"){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end(`
            <div>
                <form action="/success" method="POST">
                    <input type="text" value="user" name="username" >
                    <input type="text" value="123" name="password" >
                    <input type="submit" >
                </form>
            </div>
            `)
    }
    else if(req.url === "/success" && req.method === "POST"){
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")

        let value = ""
        req.on("data" , (a) => {
            console.log(a) // Buffer Data
            console.log(a.toString()) // username=user&password=123

            // value = a.toString()
            // console.log(value)

            value = querystring.parse(a.toString())
            console.log(value)

            res.end(`
                <div>
                    <h1>Username : ${value.username}</h1>
                    <h1>Password : ${value.password}</h1>
                </div>
                `)
        })

        // res.end(`
        //     <div>
        //         <h1>Success!</h1>
        //     </div>
        //     `)
    }
    else{
        res.statusCode = 200;
        res.setHeader("content-type" , "text/html")
        res.end(`
            <div>
                <h1>Error!</h1>
            </div>
            `)
    }

})

server.listen(5000 , () => {
    console.log("Working...")
})