var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookingSchema = new Schema({
    clientName : String,
    bookDate : Date,
    createdAt : {
      type : Date,
      default : Date.now
    },
  });

  module.exports = mongoose.model('Booking', BookingSchema);