const express = require('express');

const router = express.Router();

const connection = require('../models/connection');

//import post model
const post =  require('../models/postModel');

//import comment model
const comment = require('../models/comments');

const mongoose = require('mongoose');

//router for posting a comment(s) on certain post
router.route("/post/:id/comments").post(function(req, res) {
    comment.insertMany(
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

