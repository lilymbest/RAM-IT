var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var techInfoSchema = new mongoose.Schema({
    date: {

    },
    timeSlots: {
        enum: [],
    },
    zip: {
        type: Number,
        required: true,
    },
});


module.exports = mongoose.model('Info', techInfoSchema);

