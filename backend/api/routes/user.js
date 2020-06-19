const express = require('express');

const router = express.Router();

const connection = require('../models/connection');

const User = require('../models/user');

const mongoose = require('mongoose');

router.post('/signup', async (req, res) => {
        const {
            name,
            email,
            password
        } = req.body

    const user = new User({
        _id: new mongoose.Types.ObjectId,
        name: name,
        email: email,
        password: password
    });

    //checks if the user exists
    exists = await User.findOne({ email: email });
    if(exists){
        return res.json({
            msg: "User exists, please log in"
        })
    }

     user
    .save()
    .then(result =>{
        console.log(result);
        res.status(201).json({
            message: 'User created'
        });
    })
    .catch(err => console.log(err));
    res.status(500).json({
        error:err
    });

    // exists = await user.
})



module.exports = router;