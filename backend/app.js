require('./api/models/connection')
const express = require('express');
const app =  express();
const bodyParser =  require('body-parser');
const cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes that handle requests
const userRoutes = require('./api/routes/user');
const commentRoutes = require('./api/routes/comments');

app.use('/user', userRoutes);
app.use('/comments', commentRoutes);


//post Route
const postRoute = require('./api/routes/post');
app.use('/post',postRoute);

//like route
const likeRoute = require('./api/routes/like');
app.use('/likes',likeRoute);


module.exports = app;