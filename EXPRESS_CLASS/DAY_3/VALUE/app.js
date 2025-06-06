const PORT = 5000;
const express = require("express")
const path = require("path")
const app = express()

app.use(express.urlencoded({ extended : true }))

// username:user&&password:123

app.get("/" , (req , res) => {
    res.status(200).sendFile(path.join(__dirname , "public" , "index.html"))
})

app.post("/submit" , (req , res) => {
    // res.status(200).send(`Username : ${req.body.username} , Password : ${req.body.password}`)

    var { username , password } = req.body;
    res.status(200).send(`Username : ${username} , Password : ${password}`)
})

app.listen(PORT , () => {
    console.log("Server Running Successfully!")
})