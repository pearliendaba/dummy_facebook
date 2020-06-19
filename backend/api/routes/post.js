const express = require('express');
const router = express.Router();
const post = require("../models/postModel");

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


  //Deleting a post 
  router.route('/:id').delete(function(req,res){
    post.deleteOne({ id:req.params.id}, function (err) {
        if(err) console.log(err);
        res.send("Successful deletion");
      });
  });

  


module.exports = router;