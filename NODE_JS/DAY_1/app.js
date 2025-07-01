// var msg = "Hello"
// console.log(msg)


// const file = require("fs")
// file.writeFileSync("index.html" , "<h1>Hello</h1>")


const fs = require("fs")
fs.writeFileSync("index.html" , `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hii</h1>
    </body>
    </html>
    `)