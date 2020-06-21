const express = require('express');
const router = express.Router();
const like = require("../models/likeModel");

// //adding a like
router.route("/").post(function(req, res) {
    like.insertMany(
      [
        { like: req.body.like },
      ],
      function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      }
    );
  });


  // getting all likes
  router.route('/').get(function(req,res)  {
    like.find({},function(err,result){
        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
    })
  })

  

module.exports = router;