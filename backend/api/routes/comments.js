const express = require('express');

const router = express.Router();

const connection = require('../models/connection');

//import for the post model
const post =  require('../models/postModel');
//import for the comment model
const Comment = require('../models/comments');

const mongoose = require('mongoose');

//router for posting a comment(s) on certain post
router.route("/post/:id/comments").post(function(req, res) {
    Comment.insertMany(
      [
        { comment: req.body.comment}
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


module.exports = router;

