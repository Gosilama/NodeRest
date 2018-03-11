const express = require('express');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const handlerr = require('./lib/errorhandler')
const mongoose = require('mongoose');

const routes = require('./routes/api');

// set up
const app = express();

// connect to db
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

// Get the default connection
var db = mongoose.connection;

//bind connection to error event(to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(bodyParser.json());

app.use('/api',routes);

// error handling
// should be called below all other app.use()
app.use(errorhandler({log: handlerr.errorhandler}));

// OR
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// listen for requests
// app.listen(2000, () => {
//     console.log('accepting requests!');
// });

// can be rewritten as
app.listen(process.env.port || 2000, () => {
    console.log('accepting requests!');
});
// in the event that there are environment variables