var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var customerSchema = new mongoose.Schema({
    nameFirst: String,
    nameLast: String,
    zipCode: Number,
    Address: String,
    notes: String,
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Customer', customerSchema);