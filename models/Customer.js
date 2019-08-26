var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Customer', customerSchema);