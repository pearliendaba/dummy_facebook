require('./api/models/connection')
const express = require('express');
const app =  express();
const bodyParser =  require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes that handle requests
const userRoutes = require('./api/routes/user');
app.use('/user', userRoutes);

//post Route
const postRoute = require('./api/routes/post');
app.use('/posts',postRoute);


module.exports = app;