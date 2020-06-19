const express = require('express');

const router = express.Router();

const connection = require('../models/connection');

const Comment = require('../models/comments');

const mongoose = require('mongoose');


router.route("/comments").post(function(req, res) {
    Comment.insertMany(
      [
        { comment: req.body.comment }
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