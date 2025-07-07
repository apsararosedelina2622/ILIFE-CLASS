const express = require("express")
const app = express()

app.get("/" , (req , res) => {
    // res.status(200)
    // res.end("Home")
    // res.send("Home")
    res.status(200).send(`<h1>Home Page</h1>`)
})

app.get([ "/about" , "/about-us" ] , (req , res) => {
    res.status(200).send(`<h1>About Page</h1>`)
})

app.get("/user/:id" , (req , res) => {
    res.status(200).send(`UserID : ${req.params.id}`)
})

app.get("/form" , (req , res) => {
    res.status(200).send(`
        <form action="/submit" method="POST">
            <input type="text" >
            <input type="text" >
            <input type="submit" >
        </form>
        `)
})

app.post("/submit" , (req , res) => {
    res.status(200).send(`Form submitted successfully!`)
})

app.get("*", (req , res) => {
    res.status(404).send(`<h1>Error Page</h1>`)
})


app.listen(5000 , () => {
    console.log("Working!")
})