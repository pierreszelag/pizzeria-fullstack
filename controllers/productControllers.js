function createProduct(req, res) {
    let Product = require('../models/productModel');
    let newProduct = Product ({
        category: req.body.category,
        name: req.body.name,
        description : req.body.description,
        price : req.body.price
    });
  
    newProduct.save()
    .then((savedProduct) => {

        res.json(savedProduct);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readProducts(req, res) {

    let Product = require("../models/productModel");

    Product.find({})
    .then((products) => {
        res.status(200).json(products);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readProduct(req, res) {

    let Product = require("../models/productModel");

    Product.findById({_id : req.params.id})
    .then((product) => {
        res.status(200).json(product);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateProduct(req, res) {

    let Product = require("../models/productModel");

    Product.findByIdAndUpdate({_id: req.params.id}, 
        {   
            category: req.body.category,
            name: req.body.name,
            description : req.body.description,
            price : req.body.price
        }, 
        {new : true})
    .then((updatedProduct) => {
        res.status(200).json(updatedProduct);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteProduct(req, res) {

    let Product = require("../models/productModel");

    Product.findOneAndRemove({_id : req.params.id})
    .then((deletedProduct) => {
        res.status(200).json(deletedProduct);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createProduct;
module.exports.reads = readProducts;
module.exports.read = readProduct;
module.exports.delete = deleteProduct;
module.exports.update = updateProduct;
