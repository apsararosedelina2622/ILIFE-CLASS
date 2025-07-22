// const express = require("express")
// const app = express()

// const path = require("path")

// app.use(express.urlencoded())

// app.get("/" , (req , res) => {
//     res.status(200).sendFile(path.join(__dirname , "public" , "index.html"))
// })

// app.post("/submit" , (req , res) => {
//     // console.log(req.body)
//     // console.log(req.body.username)
//     // console.log(req.body.password)
//     const { username , password } = req.body
//     // res.status(200).send("Ok")
//     res.status(200).send(`<h1>Username : ${username}</h1><h1>Password : ${password}</h1>`)
// })

// app.listen(5000 , () => {
//     console.log("server running!")
// })



const express = require("express")
const app = express()

const path = require("path")

app.use(express.urlencoded())

app.get("/" , (req , res) => {
    res.status(200).sendFile(path.join(__dirname , "public" , "index.html"))
})

app.post("/submit" , (req , res) => {
    // console.log(req.body)
    const { username , password } = req.body
    res.status(200).send(`<h1>Username : ${username}</h1><h1>Password : ${password}</h1>`)
})

app.listen(5000 , () => {
    console.log("ok!")
})