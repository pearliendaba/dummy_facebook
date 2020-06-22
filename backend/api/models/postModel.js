
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let post = new Schema({
  id: {
    type: Number
  },
  content: {
    type: String
  },

  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]

});



module.exports = mongoose.model('post',post);