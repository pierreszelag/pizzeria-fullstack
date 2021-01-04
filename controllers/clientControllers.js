function createClient(req, res) {
    let Client = require('../models/clientModel');
    let newClient = Client ({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        email: req.body.email,
        phone : req.body.phone,
        adress : req.body.adress,
        password : req.body.password
    });
  
    newClient.save()
    .then((savedClient) => {

        res.json(savedClient);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readClients(req, res) {

    let Client = require("../models/clientModel");

    Client.find({})
    .then((Clients) => {
        res.status(200).json(Clients);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readClient(req, res) {

    let Client = require("../models/clientModel");

    Client.findById({_id : req.params.id})
    .then((Client) => {
        res.status(200).json(Client);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateClient(req, res) {

    let Client = require("../models/clientModel");

    Client.findByIdAndUpdate({_id: req.params.id}, 
        {
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email: req.body.email,
            phone : req.body.phone,
            adress : req.body.adress,
            password : req.body.password
        }, 
        {new : true})
    .then((updatedClient) => {
        res.status(200).json(updatedClient);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteClient(req, res) {

    let Client = require("../models/clientModel");

    Client.findOneAndRemove({_id : req.params.id})
    .then((deletedClient) => {
        res.status(200).json(deletedClient);
    }, (err) => {
        res.status(500).json(err);
    });
 }

module.exports.create = createClient;
module.exports.reads = readClients;
module.exports.read = readClient;
module.exports.delete = deleteClient;
module.exports.update = updateClient;
