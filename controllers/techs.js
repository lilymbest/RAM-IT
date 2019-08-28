const Cus = require('../models/Customer');
const Tech = require('../models/Tech')

module.exports = {
    index,
    show,
    delete: deleteOne,
    resolve
};

function index(req, res){
    Tech.find({}, function(err, techs){
        res.render('tech/index', {
            tech: techs,
            user: req.user
        });
    });
}

function show(req, res) { 
    Cus.find({})
    .then(customers => {
        res.render('tech/tickets',{ customers })
    })
    .catch(err => {
        res.send(err) // remove this in production
    })
  }

  function deleteOne(id){
    customers.splice(id, 1);
    res.redirect('tech/tickets');
}
  function resolve(req, res) {
    Cus.deleteOne(req.params.id);
    res.redirect('tech/tickets');
}