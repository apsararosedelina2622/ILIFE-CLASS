// const fs = require("fs")

// fs.writeFileSync("example.html" , "Hello")

// fs.writeFileSync("example.html" , "<h1>Hello</h1>")

// fs.writeFileSync("example.html" , `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
//         <h1>Hello</h1>
//     </body>
//     </html>
//     `)


const fs = require("fs")

fs.readFile("example.html" , "utf8" , (err , data) => {
    if(err){
        console.log("Error!")
    }else{
        console.log(data)
    }
})