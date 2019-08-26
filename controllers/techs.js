var Tech = require('../models/Tech');

module.exports = {
    index,
};

function index(req, res){
    Tech.find({}, function(err, techs){
        res.render('techs/index', {title: 'All Puppies', puppies});
    });
}