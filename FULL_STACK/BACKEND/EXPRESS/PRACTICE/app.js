// const express = require("express")
// const app = express()

// app.get("/" , (req , res , next) => {
//   const home = "HOME PAGE"
//   next(home)
// })

// app.get("/error" , (req , res , next) => {
//   const error = new Error("Something went wrong!")
//   next(error)
// })

// app.use((err , req , res , next) => {
//   if(err.name){
//     res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
//   }
//   else{
//     res.status(200).send(err)
//   }
// })

// app.listen(5000 , () => {
//   console.log("working!")
// })


const express = require("express")
const app = express()

const path = require("path")

app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "public"))

app.get("/" , (req , res) => {
  res.render("index" , { title : "Home" })
})

app.get("/about" , (req , res) => {
  res.render("about" , { title : "About" })
})

app.listen(5000 , () => {
  console.log("Ok!")
})