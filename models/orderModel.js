var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    productList : [String],
    readyBy : Date,
    createdAt : {
      type : Date,
      default : Date.now
    }
  });

  module.exports = mongoose.model('Order', OrderSchema);