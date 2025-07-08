const PORT = 5000
const express = require("express")
const app = express()

const path = require("path")

app.use(express.urlencoded())

app.get("/" , (req , res) => {
    res.sendFile(path.join(__dirname , "public" , "index.html"))
})

app.post("/submit", (req , res) => {
    // console.log(req.body)
    // res.send(`<h1>Username : ${req.body.username} , Password : ${req.body.password}</h1>`)

    const { username , password } = req.body
    res.send(`<h1>Username : ${username} , Password : ${password}</h1>`)
})

app.listen(PORT , () => {
    console.log("working!")
})