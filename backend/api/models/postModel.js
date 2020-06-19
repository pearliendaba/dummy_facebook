
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let post = new Schema({
  id: {
    type: Number
  },
  content: {
    type: String
  },

});

module.exports = mongoose.model('post',post);