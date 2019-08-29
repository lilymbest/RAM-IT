var Customer = require('../models/Customer');

module.exports = {
  new: newTicket,
  index,
  create,
  getAll,
};
  
function index(req, res){
  Customer.find({})
  .then(customers => {
    let last1 = customers.slice(-1)
      res.render('customers/index',{ customers: last1 })
  })
  .catch(err => {
      res.send(err) // remove this in production
  })
}


function newTicket(req, res) {
  res.render('customers/new')
}

function create(req, res) {
  var customer = new Customer(req.body);
  console.log(req.body);
  // for now, redirect righmoviest back to new.ejs
  customer.save(function(err) {
    if (err) res.send(err);
   res.redirect('index');// this is breaking it
});
}

function getAll() {
  return Customer.find({})
}

