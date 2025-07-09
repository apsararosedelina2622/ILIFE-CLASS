const express = require("express")
const app = express()

app.get("/" , (req , res , next) => {
  const home = "home page"
  next(home)
})

app.get("/about" , (req , res , next) => {
  const about = "about page"
  next(about)
})

app.get("/error" , (req , res , next) => {
  const error = new Error("about page")
  next(error)
})

app.use((err , req , res , next) => {
  if(err.name){
    res.send({
      name : err.name , 
      message : err.message
    })
  }
  else{
    res.send(err)
  }
})

app.listen(5000, ()=>{
    console.log('Running Successfully');
})