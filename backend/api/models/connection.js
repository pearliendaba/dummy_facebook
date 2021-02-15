const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dummy_dummy', {useNewUrlParser:true, useFindAndModify: false,useCreateIndex:true,useUnifiedTopology:true },(err)=>{
      if(err) {return console.log("Mongo connection failed: " + err)}
      else { return console.log("Successfully connected to DB")}
});

require('./user')




