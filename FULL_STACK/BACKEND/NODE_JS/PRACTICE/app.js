const file = require("fs")

file.readFile("sample.html" , "utf8" , (err , data) => {
    if(err){
        console.log(err.name , err.message)
    }
    else{
        console.log(data)
    }
})