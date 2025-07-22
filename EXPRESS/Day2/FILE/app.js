// const express = require("express")
// const app = express()

// const path = require("path")

// app.get("/" , (req , res) => {
//     res.status(200).sendFile(path.join(__dirname , "public" , "index.html"))
// })

// app.listen(5000 , () => {
//     console.log("sever running!")
// })


// const express = require("express")
// const app = express()

// const path = require("path")

// app.get("/" , (req , res) => {
//     const filePath = path.join(__dirname , "public" , "index.html")
//     console.log(filePath)
//     // res.status(200).send('Hello')
//     res.status(200).sendFile(filePath)
// })

// app.listen(5000 , () => {
//     console.log("working!")
// })


const express = require("express")
const app = express()

app.use(express.static("public"))

app.listen(5000 , () => {
    console.log("working!")
})