const express = require('express');
// const router = express.Router();

var Ninja = require('../models/ninja');

exports.showNinjas = (req, res) => {
    // Ninja.find().then((ninjas) => {
    //     res.send(ninjas);
    // })

    // Can also be done using url parameters
    // GeoNear will be used because of the geolocation feature added
    

    Ninja.geoSearch(
    {
        type: "Point",
        coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },
    {
        maxDistance: 100000,
        spherical: true
    }).then((ninjas) => {
        res.send(ninjas);
    });
};

exports.showNinja = (req, res, next) => {
    Ninja.findById({_id: req.params.id})
        .then((ninja) => {
            res.send(ninja);
        }). catch(next);
};

exports.addNinja = (req, res) => {
    Ninja.create(req.body).then((ninja) => {
        res.send(ninja);
    });
};

exports.removeNinja = (req, res) => {
    Ninja.findByIdAndRemove({_id: req.params.id})
        .then((ninja) => {
            res.send(ninja);
        });
};

exports.updateNinja = (req, res) => {
    Ninja.findByIdAndUpdate({_id: req.params.id})
        .then((ninja) => {
            Ninja.findOne({_id: req.params.id})
                .then((ninja) => {
                    res.send(ninja);
                })
        });
};