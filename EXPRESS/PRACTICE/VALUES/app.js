const express = require("express")
const path = require("path")
const app = express()

app.use(express.urlencoded({ extended : true }))

app.get("/" , (req , res) => {
    res.sendFile(path.join(__dirname , "public" , "index.html"))
})

app.post("/submit" , (req , res) => {
    // res.end(`<h1>username : ${req.body.username} && password : ${req.body.password}</h1>`)

    var { username , password } = req.body;
    res.end(`<h1>username : ${username} && password : ${password}</h1>`)
})

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});