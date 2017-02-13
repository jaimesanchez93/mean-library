var mongoose= require('mongoose');

//Creating the BookSchema

var BookSchema= new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    ISBN: {
      type: String,
      required: true
    },
    editorial:{
      type: String,
      required: true
    },
    category:{
      type: String,
      enum: ['Black soap','Fantasy','Horror novel','Other']
    }
});

//Export the model Schema
module.exports= BookSchema;
