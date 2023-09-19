const express = require('express');
const mongoose = require('mongoose');
// const path = require('path');
// const fs = require('fs');
const bodyparser = require('body-parser');
// const session = require('express-session');
// const{ stringify }=require('querystring');
// const { validateHeaderName } = require('http');
// const { constrainedMemory } = require('process');
const cors = require('cors');


mongoose.connect('mongodb://127.0.0.1:27017/registration',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connected successfully");
}).catch(()=>{
    console.log("not connected");
})

const app = express()
const port = 1000;

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
app.use(express.static('../src/components'));
app.use(express.urlencoded());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// const templateDir = path.join(__dirname,'../src/components');

app.post('/registration', async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if the email is already registered
      const existingUser = await registrationform.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ message: 'Email is already registered' });
      }
  
      const newUser = new registrationform({ name, email, password });
      await newUser.save();
  
      res.status(200).json({ message: 'Registration successful' });
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(500).json({ message: 'Registration failed' });
    }
  });
 
  
app.get("/login",cors(),(req,res)=>{

})

app.post('/login',async (req,res)=>{
    const {email,password}=req.body

    try {
        const check = await registrationform.findOne({ email:email});


        if (check && check.password === password) {
              console.log('Login successful');
            //   res.redirect('/general');
            // res.json("exist")
            // res.json({ status: 'success' });
        } else {
            console.log('Login failed');
            // res.send('wrong details');
            // res.json("notexist")
            res.json({ status: 'notexist' });
        }
    } catch (err) {
        console.error('Database query error:', err);
        // res.send('wrong details');
        // res.json("faill")
        res.json({ status: 'fail' });
    }
})
app.listen(port,()=>{
    console.log(`server run at ${port}`);
});