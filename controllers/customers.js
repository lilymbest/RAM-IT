var Customer = require('../models/Customer');

module.exports = {
  new: newTicket,
  index,
};
  
function index(req, res){
  res.render('customers/index')
}

function newTicket(req, res) {
  res.render('customers/new')
}

