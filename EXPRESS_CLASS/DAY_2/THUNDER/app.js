const express = require("express")
const app = express()

app.get("/" , (req , res) => {
    res.status(200).send(`<h1>Home Page</h1>`)
})

app.get(["/about" , "/about-us"], (req , res) => {
    res.status(200).send(`<h1>About Page</h1>`)
})

app.get("/user/:abc" , (req , res) => {
    res.status(200).send(`User Id : ${req.params.abc}`)
})

app.get("/form" , (req , res) => {
    res.status(200).send(`
        <form method="POST" action="/submit">
            <input type="text" >
            <input type="submit" >
        </form>
        `)
})

app.post("/submit" , (req , res) => {
    res.status(200).send(`<h1>Form Submitted</h1>`)
})

app.all("*" , (req , res) => {
    res.status(404).send(`<h1>Error Page</h1>`)
})

app.listen(5000 , () => {
    console.log("Running!")
})