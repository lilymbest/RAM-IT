const Cus = require('../models/Customer');
const Tech = require('../models/Tech')

module.exports = {
    index,
    show,
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
