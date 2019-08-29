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
        res.render('tech/tickets',{ customers })
    })
    .catch(err => {
        res.send(err) // remove this in production
    })
}

function resolve(req, res, next) { 
    Cus.find({})
    .then(customers => {
        req.customers.splice(req.body);
        req.customers.save(function(err) {
        if(err) return next(err);
        res.redirect('tech/tickets');
    })
    .catch(err => {
        res.send(err) // remove this in production
    })
    })
}


// function resolve(req, res, next) {
//     req.customers.splice(req.body);
//     req.customers.save(function(err) {
//       if(err) return next(err);
//       res.redirect('tech/tickets');
//     });
//   }

function clock(req, res){
    Tech.find({})
    .then(techs => {
        res.render('tech/clock',{ techs })
    })
    .catch(err => {
        res.send(err) // remove this in production
    })
}
