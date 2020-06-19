const mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    comment: { 
        type: String
        }

});

module.exports = mongoose.model('Comment', commentSchema);