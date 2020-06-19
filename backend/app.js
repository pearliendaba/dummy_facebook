require('./api/models/connection')
const express = require('express');
const app =  express();
const bodyParser =  require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes that handle requests
const userRoutes = require('./api/routes/user');
const commentRoutes = require('./api/routes/comments');

app.use('/user', userRoutes);
app.use('/comments', commentRoutes);


module.exports = app;