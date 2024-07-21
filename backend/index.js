const express = require('express');
const mongoose = require('mongoose');

const bodyparser = require('body-parser');

const cors = require('cors');


mongoose.connect('mongodb://127.0.0.1:27017/registration', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected successfully");
}).catch(() => {
    console.log("not connected");
});

const app = express()
const port = 1000;

var registrationschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

var registrationform = mongoose.model('user', registrationschema);
app.use(express.static('../src/components'));
app.use(express.urlencoded());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the newAppBackend"
    });
});


app.post('/registration', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await registrationform.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: 'Email is already registered' });
        }

        const newUser = new registrationform({ name, email, password });
        await newUser.save();

        res.status(200).json({ message: 'Registration successful' });
    } catch (err) {
        console.error('Error during registration:', err);
        res.status(200).json({ message: 'Registration failed' });
    }
});



app.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        const check = await registrationform.findOne({ email: email });


        if (check && check.password === password) {
            console.log('Login successful');
            res.status(200).json({ status: 'success' });
        } else if (check && check.password !== password) {
            console.log('password are wrong');
            res.json({ status: 'password' });
        } else {
            console.log('user not exist');
            res.json({ status: 'notexist' });
        }
    } catch (err) {
        console.error('Database query error:', err);
        res.json({ status: 'fail' });
    }
})
app.listen(port, () => {
    console.log(`server run at ${port}`);
});