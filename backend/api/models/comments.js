const mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    comment:[ { 
        type: String
        } ],
        author : { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
    
});

module.exports = mongoose.model('comment', commentSchema);