// WRITE FILE


// const file = require("fs")

// file.writeFileSync("example.html", "Hello")


// const file = require("fs")

// file.writeFileSync("example.html", 
//    `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>

//         <h1>Hello!</h1>
        
//     </body>
//     </html>
//     `)


// READ FILE

// const file = require("fs")

// file.readFile("example.html" , "utf8" , (err , data) => {
//     if(err){
//         console.log("Error!")
//     }else{
//         console.log(data)
//     }
// })


// const file = require("fs")

// file.readFile("example.html" , (err , data) => {
//     if(err){
//         console.log("Error!")
//     }else{
//         console.log(data.toString())
//     }
// })


// DELETE FILE

// const fs = require("fs")

// fs.writeFileSync("sample.html" , "Hello")

// fs.unlinkSync("sample.html")