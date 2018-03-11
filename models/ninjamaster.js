const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NinjaMasterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    skilllevel: {
        enum: ['Master', 'Sage', 'god']
    },
    age: {
        type: Number,
        min: [70, 'too young to be a master']
    }
});

const NinjaMaster = mongoose.model('ninjamaster', NinjaMasterSchema);

module.exports = NinjaMaster;