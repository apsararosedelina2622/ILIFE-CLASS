// const file = require("fs")

// file.writeFileSync("index.html" , "Hello")


// const file = require("fs")

// file.writeFileSync("index.html" , `<!DOCTYPE html>
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


const file = require("fs")

file.readFile("index.html" , (err , data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
})