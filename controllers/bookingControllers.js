function createBooking(req, res) {
    let Booking = require('../models/bookingModel');
    let newBooking = Booking ({   
        clientName: req.body.clientName,
        bookDate: req.body.bookDate
    });
  
    newBooking.save()
    .then((savedBooking) => {

        res.json(savedBooking);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readBookings(req, res) {

    let Booking = require("../models/bookingModel");

    Booking.find({})
    .then((Bookings) => {
        res.status(200).json(Bookings);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readBooking(req, res) {

    let Booking = require("../models/bookingModel");

    Booking.findById({_id : req.params.id})
    .then((Booking) => {
        res.status(200).json(Booking);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateBooking(req, res) {

    let Booking = require("../models/bookingModel");

    Booking.findByIdAndUpdate({_id: req.params.id}, 
        {   
            clientName: req.body.clientName,
            bookDate: req.body.bookDate
        }, 
        {new : true})
    .then((updatedBooking) => {
        res.status(200).json(updatedBooking);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteBooking(req, res) {

    let Booking = require("../models/bookingModel");

    Booking.findOneAndRemove({_id : req.params.id})
    .then((deletedBooking) => {
        res.status(200).json(deletedBooking);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createBooking;
module.exports.reads = readBookings;
module.exports.read = readBooking;
module.exports.delete = deleteBooking;
module.exports.update = updateBooking;
