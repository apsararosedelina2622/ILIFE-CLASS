const express = require('express');

const app = express();

const home = (req,res) => {
    res.send('Home Page')
}

app.get('/',home);

const check = (req,res,next) => {
    const id = req.params.id;
    const admin = req.params.admin;
    const obj = {
        id : 123,
        admin : 'Apsara'
    }
    if( id==obj.id && admin==obj.admin){
        next();
    }
    else{
        res.send(`User id : ${req.params.id} Admin : ${req.params.admin} <b>Invalid User id , Admin</b>`);
    }
}

app.use('/users/:id/:admin', check , (req,res,next) => {
    res.send(`User id : ${req.params.id} Admin : ${req.params.admin} <b>Valid User id , Admin</b>`);
})

app.listen(5000)