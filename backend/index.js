const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
// const fs = require('fs');
const bodyparser = require('body-parser');
const session = require('express-session');
// const{ stringify }=require('querystring');
// const { validateHeaderName } = require('http');
// const { constrainedMemory } = require('process');


mongoose.connect('mongodb://127.0.0.1:27017/registration',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected successfully");
}).catch(()=>{
    console.log("not connected");
})

const app = express()
const port = 3000;

var registrationschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

var registrationform = mongoose.model('user',registrationschema);
app.use(express.static('users'));
app.use(express.static('../src'));
app.use(express.urlencoded());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(session({
    secret: 'secret', // Change this to a secure secret key
    resave: false,
    saveUninitialized: true,
  }));

const templateDir = path.join(__dirname,'users');

app.get('/',(req,res)=>{
    res.status(200).sendFile(templateDir+'/Home.html');
})

app.get('/registration',(req,res)=>{
    res.status(200).sendFile(templateDir+'/registration.html');
})

app.get('/login',(req,res)=>{
    res.status(200).sendFile(templateDir+'/login.html');
})


app.post('/registration',(req,res)=>{
    var mydata = registrationform(req.body);
    mydata.save().then(()=>{
        res.redirect('/login');
    }).catch((err)=>{
        res.status(400).send(`${err.messsage}`);
    })
})



app.post('/login',async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    try {
        const check = await registrationform.findOne({ email:email});

        if (check && check.password === password) {
            req.session.user = {
                email: check.email,
                name: check.name,
              };
              res.redirect('/react-app');
        } else {
            res.send('wrong details');
        }
    } catch (err) {
        res.send('wrong details');
    }
})

app.get('/react-app', (req, res) => {
    if (req.session.user) {
      // User is authenticated, serve your React app
      res.sendFile(path.join(__dirname, '../public','index.html'));
    } else {
      // User is not authenticated, redirect to login page
      res.redirect('/login');
    }
  });

app.listen(port,()=>{
    console.log(`server run at ${port}`);
})