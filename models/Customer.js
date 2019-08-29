var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var customerSchema = new mongoose.Schema({
    nameFirst: String,
    nameLast: String,
    zipCode: String,
    Address: String,
    notes: String,
    date: Date,
    phone: String,
    email: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Customer', customerSchema);