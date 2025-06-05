// const express = require("express")
// const path = require("path")
// const app = express()

// app.get("/" , (req , res) => {
//     res.status(200).sendFile(path.join(__dirname , "public" , "index.html"))
// })

// app.listen(5000 , () => {
//     console.log("Running!")
// })


const express = require("express")
const app = express()

app.use(express.static("public"))

app.listen(5000 , () => {
    console.log("Running!")
})