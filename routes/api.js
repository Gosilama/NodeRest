const express = require('express');
const router = express.Router();

const Ninja = require('../models/ninja');
const ninjamaster = require('../models/ninjamaster');

const ninjaController = require('../controllers/ninjaController');
const ninjaMController = require('../controllers/ninjaMasterController');



// get a list of ninjas from db
router.get('/ninjas', ninjaController.showNinjas);

// get a single ninja by id
router.get('/ninjas/:id', ninjaController.showNinja);

// add ninja to db
router.post('/ninjas', ninjaController.addNinja);

// modify ninja in db
router.put('/ninjas/:id', ninjaController.updateNinja);

// delete ninja from db
router.delete('/ninjas/:id', ninjaController.removeNinja);


// show all masters
router.get('/ninja/masters', ninjaMController.ninjaMasters);

// show specific ninja master
router.get('/ninjas/masters/:id', ninjaMController.ninjaMaster);

// add a ninja master to ninjago db
router.post('/ninjas/master', ninjaMController.ninjaMaster_add);

// delete a ninja master
router.put('/ninjas/master/:id', ninjaMController.ninjaMaster_del)

// GET HOME PAGE
router.get('/', (req, res) => {
    // res.redirect('/ninjas');
    res.send("you're in the homepage");
});

module.exports = router;