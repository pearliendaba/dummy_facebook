const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    name:{type: String, required:true},
    email: { type: String,require:true},
    password:{ type: String,require:true}

});

module.exports = mongoose.model('User', userSchema);