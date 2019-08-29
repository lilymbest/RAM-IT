var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var techInfoSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    clock: Boolean,
  }, {
    timestamps: true
  });



module.exports = mongoose.model('Tech', techInfoSchema);

