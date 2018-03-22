const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

// Get the default connection
var db = mongoose.connection;

module.exports = db;