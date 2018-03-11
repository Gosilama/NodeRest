var NinjaMaster = require('../models/ninjamaster');

// display all masters
exports.ninjaMasters = (req, res, next) => {
    NinjaMaster.find().then((ninjam) => {
        res.send(ninjam);
    });
};

// show particular ninja master
exports.ninjaMaster = (req, res, next) => {
    NinjaMaster.findById({_id: req.params.id})
    .then((ninjam) => {
        res.send(ninjam);
    }).catch(next);
};

// Add ninja master
exports.ninjaMaster_add = (req, res, next) => {
    NinjaMaster.create(req.body).then((ninjam) => {
        res.send(ninjam);
    }).catch(next);
}

// Delete Ninja Master
exports.ninjaMaster_del = (req, res, next) => {
    res.send('NOT IMPLEMENTED: Delete Ninja Master');
}

// Update Ninja Master
exports.ninjaMaster_update = (req, res, next) => {
    res.send('NOT IMPLEMENTED: Update Ninja Master');
}