var restful= require('node-restful');
var Book= require('../models/Book');

module.exports = function(app,route){
  var rest= restful.model(
    'book',
    app.models.book
  ).methods(['get','put','post','delete']);

  rest.register(app,route);

  //Return Middleware
  return function(req,res,next){
    next();
  }
};
