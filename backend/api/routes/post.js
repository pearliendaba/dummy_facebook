const express = require('express');
const router = express.Router();
const post = require("../models/postModel");
const comments = require('../models/comments');
const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;


// //adding a post
router.route("/").post(function(req, res) {
    post.insertMany(
      [
        { content: req.body.content },
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


  // getting all posts
  router.route('/').get(function(req,res)  {
    post.find({},function(err,result){
        if(err){
            res.send(err);
        } else {
            res.send(result);
        }
    })
  })

  //get the post by id and populate it with its comments
  router.route('/:id').get(function(req,res)  {
    post.findById(req.params.id).populate('comments').then((post) => {
      res.render('post', { post })
    }).catch((err) => {
      console.log(err.message)
    })
  })
 
  //Deleting a post as well as its comments
  router.route('/:id').delete(async  function(req,res){

     await post.deleteOne({ id:ObjectId(req.params.id)}, function (err) {
      console.log(req.params.id)
        if(err) console.log(err);

        comments.deleteOne({ id:req.params.id}, function (err) {
          if(err) console.log(err);

        res.send("deleted");
      });
  });

});

module.exports = router;