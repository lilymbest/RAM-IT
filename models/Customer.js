var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    zip: Number,
    avatar: String,
    googleId: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Customer', customerSchema);