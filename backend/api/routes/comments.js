const express = require('express');

const router = express.Router();

const connection = require('../models/connection');

//import post model
const post =  require('../models/postModel');

//import comment model
const comment = require('../models/comments');

const mongoose = require('mongoose');

//router for posting a comment(s)
router.route("/").post(function(req, res) {
  comment.insertMany(
    
      { commentreply: req.body.commentreply },

    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  )

});

//get the comment by id

router.route("/:id").get(function(req, res) {
post.insertMany(
  [
    { commentreply: req.body.commentreply },
  ],
  function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  }
)

});

//Deleting a comment
router.route('/').delete( async function(req,res){
comment.deleteOne({ _id:ObjectId(req.params.id)}, function (err, result) {
  console.log(eq.params.id);
    if(err) console.log(err);

    res.send("Comment deleted");
  });
});


module.exports = router;

