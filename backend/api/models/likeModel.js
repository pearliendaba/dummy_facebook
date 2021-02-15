
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let like = new Schema({
  id: {
    type: Number
  },
  like: {
    type: Number
  },

});

module.exports = mongoose.model('like',like);