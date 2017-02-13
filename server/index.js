var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride= require('method-override');
var _ = require('lodash');
var path= require('path');
//Create the application
var app= express();

//Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//CORS Support
app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Set Static Folder
app.use(express.static(path.join(__dirname, '../client')));

//View Engine
app.set('views',path.join(__dirname,'../client'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get('/',function(req,res,next){
  res.render('index.html');
});



//Connect to MongoDB
mongoose.connect('mongodb://localhost/mean-library');
mongoose.connection.once('open',function(){

  //load the models
  app.models=require('./models/index');

  //load the routes
  var routes= require('./routes');
  _.each(routes,function(controller,route){
    app.use(route,controller(app,route));
  });

  console.log('Listening on port 3000...');
  app.listen(3000);
})
