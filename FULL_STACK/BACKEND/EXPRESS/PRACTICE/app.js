const express = require("express")
const app = express()

const path = require("path")

app.use(express.urlencoded())

app.get("/" , (req , res) => {
  res.sendFile(path.join(__dirname , "public" , "index.html"))
})

app.post("/submit" , (req , res) => {
  console.log(req.body)
  const { username , password } = req.body
  res.send(`username : ${username} Password : ${password}`)
})

app.listen(5000)