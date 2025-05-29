const http = require("http")

const server = http.createServer((req , res) => {
    try{
        if(req.url === "/"){
            res.statusCode = 200;
            res.setHeader("content-type" , "text/html")
            res.end("Home Page")
        }
        else if(req.url === "/error"){
            throw new Error("Something went wrong!")
        }
        else{
            res.statusCode = 404;
            res.setHeader("content-type" , "text/html")
            res.end("Error Page")
        }
    }
    catch(err){
        res.statusCode = 404;
        res.setHeader("content-type" , "text/html")
        res.end(`Error!... ${err.message}`)
    }
})

server.listen(5000 , () => {
    console.log("Running!...")
})