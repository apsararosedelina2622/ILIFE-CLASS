const http = require('http');

const server = http.createServer( (req,res) => {
    if(req.url === '/')
    {
        res.statusCode = 200;
        res.setHeader('Content-type','text/html');
        res.end('<h1>Home Page</h1>');
    }
    else if(req.url === '/form')
    {
        res.statusCode = 200;
        res.setHeader('Content-type','text/html');
        res.end('<h1>Form Page</h1><br><form action="/success" method="POST"><input type="text" required><input type="submit" value="Submit"></form>');
    }
    else if(req.url === '/success' && req.method === 'POST')
    {
        res.statusCode = 200;
        res.setHeader('Content-type','text/html');
        res.end('<h1>Posted Successfully</h1>');    
    }
    else
    {
        res.statusCode = 404;
        res.setHeader('Content-type','text/html');
        res.end(`
            <style>
                img{
                    margin-top: 60px;
                    margin-left: 500px;
                    height: 200px;
                    width: 200px;
                }
                h2:nth-of-type(3){
                    color: grey;
                }
                h2{
                    margin-left: 550px;
                }
                button:nth-of-type(1){
                    border: none;
                    color: white;
                    background-color: rgb(15, 80, 210);
                    padding: 8px 20px;
                    margin-left: 550px;
                    margin-top: 60px;
                    border-radius: 15px;
                }
                button:nth-of-type(2){
                    border: 2px solid grey;
                    color: grey;
                    background-color: white;
                    padding: 8px 10px;
                    margin-left: 180px;
                    margin-top: 60px;
                    border-radius: 15px;
                }
            </style>

            <img src="https://static.vecteezy.com/system/resources/previews/034/998/724/non_2x/corrupted-pixel-file-icon-damage-document-symbol-sign-broken-data-vector.jpg" alt="">
            <h2>Your File Was Not Found</h2>
            <h2>It may have been moved or deleted</h2>
            <h2>ERR_FILE_NOT_FOUND</h2>
            <button>Reload</button>
            <button>View Details</button>`);
    }
})

server.listen(5000 , () => {
    console.log("Server Runing Successfully!")
})