function createOrder(req, res) {
    let Order = require('../models/orderModel');
    let newOrder = Order ({
        productList: req.body.productList,
        readyBy: req.body.readyBy
    });
  
    newOrder.save()
    .then((savedOrder) => {

        res.json(savedOrder);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readOrders(req, res) {

    let Order = require("../models/orderModel");

    Order.find({})
    .then((Orders) => {
        res.status(200).json(Orders);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readOrder(req, res) {

    let Order = require("../models/orderModel");

    Order.findById({_id : req.params.id})
    .then((Order) => {
        res.status(200).json(Order);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateOrder(req, res) {

    let Order = require("../models/orderModel");

    Order.findByIdAndUpdate({_id: req.params.id}, 
        {
            productList: req.body.productList,
            readyBy: req.body.readyBy
        }, 
        {new : true})
    .then((updatedOrder) => {
        res.status(200).json(updatedOrder);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteOrder(req, res) {

    let Order = require("../models/orderModel");

    Order.findOneAndRemove({_id : req.params.id})
    .then((deletedOrder) => {
        res.status(200).json(deletedOrder);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createOrder;
module.exports.reads = readOrders;
module.exports.read = readOrder;
module.exports.delete = deleteOrder;
module.exports.update = updateOrder;
