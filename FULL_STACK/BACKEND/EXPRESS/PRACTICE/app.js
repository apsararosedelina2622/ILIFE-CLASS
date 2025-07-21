const express = require("express")
const app = express()

const path = require("path")

// app.get("/" , (req , res) => {
//   res.status(200).sendFile(path.join(__dirname , "public" , "index.html"))
// })

// app.use(express.static("public"))

app.use(express.urlencoded())

app.get("/" , (req , res) => {
  res.status(200).sendFile(path.join(__dirname , "public" , "index.html"))
})

app.post("/submit" , (req , res) => {
  res.status(200).send(`Username : ${req.body.username} , Password : ${req.body.password}`)
})

app.listen(5000 , () => {
  console.log("Working!")
})