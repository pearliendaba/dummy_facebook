
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let post = new Schema({
  id: 
    mongoose.Schema.Types.ObjectId
  ,
  content: {
    type: String
  },

  comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }],

   //author : { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }

});



module.exports = mongoose.model('post',post);