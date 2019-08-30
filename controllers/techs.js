const Cus = require('../models/Customer');
const Tech = require('../models/Tech')

module.exports = {
    index,
    show,
    delete: resolve,
    clock,
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
        res.render('tech/tickets',{ customers, user: req.user })
    })
    .catch(err => {
        res.send(err) // remove this in production
    })
}


function resolve(req, res, next) {
    Cus.findByIdAndRemove(req.params.id, function(err){
        Cus.remove();
    })
    res.redirect('/tech/tickets')
}

function clock(req, res){
    Tech.find({})
    .then(techs => {
        res.render('tech/clock',{ user: req.user })
    })
    .catch(err => {
        res.send(err) // remove this in production
    })
}
