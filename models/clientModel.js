var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    firstname : String,
    lastname : String,
    email : String,
    phone : String,
    adress : String,
    password : String,
    createdAt : {
      type : Date,
      default : Date.now
    },
  });

  module.exports = mongoose.model('Client', ClientSchema);