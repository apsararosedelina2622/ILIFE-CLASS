const express = require("express")
const app = express()

app.set("view engine" , "ejs")

app.get("/" , (req , res) => {
    res.render("index" , { title : "Home Page" })
})

app.listen(5000)