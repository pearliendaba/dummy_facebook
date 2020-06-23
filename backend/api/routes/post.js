const express = require('express');
const router = express.Router();
const post = require("../models/postModel");
const comment = require('../models/comments');
const User = require('../models/user');

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

    post.author = req.user._id;

    post
    .save()
    .then(post => {
    return User.findById(req.user._id);
  });

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
    post.findById(req.params.id).populate('comment').populate('author').then((post) => {
      res.render('Post', { post })
    }).catch((err) => {
      console.log(err.message)
    })
  })
 
  //Deleting a post as well as its comments
  router.route('/:id').delete(function(req,res){
    post.deleteOne({ id:req.params.id}, function (err) {
        if(err) console.log(err);

        comments.deleteOne({ id:req.params.id}, function (err) {
          if(err) console.log(err);

        res.send("Successful deletion");
      });
  });

});

module.exports = router;