var Customer = require('../models/Customer');

module.exports = {
  new: newTicket,
  index,
  create,
  getAll,
  update,
  edit,
};
  
function index(req, res){
  Customer.find({})
  .then(customers => {
    let last1 = customers.slice(-1)
      res.render('customers/index',{ customers: last1, user: req.user })
  })
  .catch(err => {
      res.send(err) // remove this in production
  })
}


function newTicket(req, res) {
  res.render('customers/new', {user: req.user})
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

function update(req, res) {
  Customer.findByIdAndUpdate(req.params.id, req.body, function(err, customers) {
    customers.save(function(err) {
      res.redirect("customers/index/:id", customers);
    });
  });
}

function edit(req, res) {
    Customer.findById(req.params.id, function(err, customers) {
      res.render("customers/edit", { customers, user: req.user });
    });
}