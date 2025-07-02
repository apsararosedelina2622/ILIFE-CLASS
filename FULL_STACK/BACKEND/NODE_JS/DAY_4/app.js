const http = require('http');
const querystring = require('querystring');
const server = http.createServer((req,res)=> {

    if(req.url==='/'){
        res.statusCode=200;
        res.setHeader('Content-type','text/html');
        res.end(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <title>Document</title>
                <style>
                    .nav{
                        background-color: black;
                        display: flex;
                        justify-content: space-between;
                        padding: 15px 10px;
                        font-size: 20px;
                    }
                    .menu a{
                        text-decoration: none;
                        color: white;
                        padding: 10px;
                    }
                    .reg a{
                        text-decoration: none;
                        color: black;
                    }
                </style>
            </head>
            <body>
                <header>
                    <div class="nav">
                        <div class="menu">
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/contact">Contact</a>
                        </div>
                        <div class="reg"> 
                            <button class="btn btn-light"><a href="/register">Register</a></button>  
                        </div>
                    </div>
                </header>
            </body>
            </html>`);
    }
    else if(req.url==='/about'){
        res.statusCode=200;
        res.setHeader('Content-type','text/html');
        res.end(`<h1>About Page</h1>`);
    }
    else if(req.url==='/contact'){
        res.statusCode=200;
        res.setHeader('Content-type','text/html');
        res.end(`<h1>Contact Page</h1>`);
    }
    else if(req.url==='/register')
    {
        res.statusCode=200;
        res.setHeader('Content-type','text/html');
        res.end(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <title>Document</title>
                <style>
                    .container{
                        width: 1000px;
                        padding: 32px;
                        box-shadow: 0px 5px 10px rgba(0,0,0,0.4);
                        border-radius: 10px;
                        color: white;
                        background-color:black;

                    }
                    .container input{
                        width: 100%;
                        border-radius: 8px;
                        color:white;
                        background-color: transparent;
                        border: 2px solid white;
                        padding: 6px 8px;
                    }
                    .container h1{
                        text-align: center;
                    }
                    label{
                        margin-top: 15px;
                    }
                </style>
            </head>
            <body><br><br>
                <div class="container-fluid">
                    <div class="container">
                        <form action="/submit" method="POST">
                            <h1>REGISTER FORM</h1>
                            <div class="row">
                                <div class="col-6">
                                    <label>Enter First Name</label>
                                    <input value="User" type="text" name="fname">
                                </div>
                                <div class="col-6">
                                    <label>Enter Last Name</label>
                                    <input value="Name" type="text" name="lname">
                                </div>
                                <div class="col-6">
                                    <label>Enter Gmail</label>
                                    <input value="user123@gmail.com" type="mail" name="mail">
                                </div>
                                <div class="col-6">
                                    <label>Enter Password</label>
                                    <input value="user@123" type="password" name="pw">
                                </div>
                                <div class="col-6">
                                    <label>Enter Confrim Password</label>
                                    <input value="user@123" type="password" name="cpw">
                                </div>
                                <div class="col-6">
                                    <label>Enter Age</label>
                                    <input value="20" type="number" name="age">
                                </div>
                                <div class="col-6">
                                    <label>Enter Gender</label>
                                    <input value="Female" type="text" name="gender">
                                </div>
                                <div class="col-6">
                                    <label>Enter Place</label>
                                    <input value="Trichy" type="text" name="places">
                                </div>
                                <div class="col-6">
                                    <label>Enter Phone No</label>
                                    <input value="9876543210" type="number" name="phno">
                                </div>
                                <div class="col-6">
                                    <label>Enter Date of Birth</label>
                                    <input type="date" name="dob" value="2003-08-27"><br><br>
                                </div> 
                            </div>  
                            <center>         
                                <button class="btn btn-outline-light">Submit</button>
                            </center>
                        </form>
                    </div>
                </div>
            </body>
            </html>`);
    }
    else if(req.url === '/submit' && req.method === "POST"){
        let values = '';
        req.on('data',(a)=>{

            values=querystring.parse(a.toString());

            res.end(`
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                        <title>Document</title>
                        <style>
                            .container{
                                width: 1000px;
                                padding: 32px;
                                box-shadow: 0px 5px 10px rgba(0,0,0,0.4);
                                border-radius: 10px;
                                color: white;
                                font-size: 20px;
                                background-color:black;
                            }
                            td{
                                padding:10px 125px;
                            }
                        </style>
                    </head>
                    <body><br>
                        <div class="container-fluid">
                            <div class="container">
                                <center>
                                    <h1>DATA</h1><br>
                                    <table border='1'>
                                        <tr>
                                            <td><h5>First Name </h5></td>
                                            <td><h5>${values.fname}</h5></td>
                                        </tr>
                                        <tr>
                                            <td><h5>Last Name </h5></td>
                                            <td><h5>${values.lname}</h5></td>
                                        </tr>
                                        <tr>
                                            <td><h5>Gmail</h5></td>
                                            <td><h5>${values.mail}</h5></td>
                                        </tr>
                                        <tr>
                                            <td><h5>Password </h5></td>
                                            <td><h5>${values.pw}</h5></td>
                                        </tr>
                                        <tr>
                                            <td><h5>Confirm Password </h5></td>
                                            <td><h5>${values.cpw}</h5></td>
                                        </tr>
                                        <tr>
                                            <td><h5>Age</h5></td>
                                            <td><h5>${values.age}</h5></td>
                                        </tr>
                                        <tr>
                                            <td><h5>Gender</h5></td>
                                            <td><h5>${values.gender}</h5></td>
                                        </tr>
                                        <tr>
                                            <td><h5>Place</h5></td>
                                            <td><h5>${values.places}</h5></td>
                                        </tr>
                                        <tr>
                                            <td><h5>Phone No</h5></td>
                                            <td><h5>${values.phno}</h5></td>
                                        </tr>
                                        <tr>
                                            <td><h5>Date of Birth</h5></td>
                                            <td><h5>${values.dob}</h5></td>
                                        </tr>
                                    </table>
                                </center>
                            </div>
                        </div>
                    </body>
                </html>`
            )
        });

    }
    else
    {
        res.statusCode = 404;
        res.setHeader('Content-type','text.html');
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                    <title>Document</title>
                    <style>
                        img{
                            margin-top: 60px;
                            margin-left: 300px;
                            height: 200px;
                            width: 200px;
                        }
                        h4:nth-of-type(3){
                            color: grey;
                        }
                        h4{
                            line-height: 40px;
                            margin-left: 350px;
                        }
                        button:nth-of-type(1){
                            margin-left: 350px;
                            margin-top: 60px; 
                        }
                        button:nth-of-type(2){
                            margin-left: 200px;
                            margin-top: 60px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <img src="https://static.vecteezy.com/system/resources/previews/034/998/724/non_2x/corrupted-pixel-file-icon-damage-document-symbol-sign-broken-data-vector.jpg" alt="">
                        <h4>Your File Was Not Found</h4>
                        <h4>It may have been moved or deleted</h4>
                        <h4>ERR_FILE_NOT_FOUND</h4>
                        <button class='btn btn-primary'>Reload</button>
                        <button class='btn btn-outline-primary'>View Details</button>
                    </div>
                </body>
            </html>`
        );
    }
})
server.listen(5000);