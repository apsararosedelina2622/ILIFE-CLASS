const express = require("express")

const app = express()

app.get("/" , (req , res) => {
    // res.status(200)
    // res.end(`<h1>Home Page</h1>`)
    // res.send(`<h1>Home Page</h1>`)
    res.status(200).send(`<h1>Home Page</h1>`)
})

app.get("/about" , (req, res) => {
    res.status(200).send(`<h1>About Page</h1>`)
})

app.get(["/contact" , "/contact-us"] , (req, res) => {
    res.status(200).send(`<h1>Contact Page</h1>`)
})

app.get("/user/:abc" , (req , res) => {
    res.status(200).send(`<h1>User Id : ${req.params.abc}</h1>`)
})

app.get("/form" , (req , res) => {
    res.status(200).send(`
        <form action="/submit" method="POST">
            <input type="text" >
            <input type="submit" >
        </form>
        `)
})

app.post("/submit" , (req , res) => {
    res.status(200).send(`<h1>Form submitted successfully!</h1>`)
})

app.all("*" , (req , res) => {
    res.status(404).send(`<h1>Error Page</h1>`)
})

app.listen(5000 , () => {
    console.log("server running successfully!")
})