var Tech = require('../models/Tech');

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
    Tech.findById(req.params.id, function(err, tech) {
      res.render('tech/show', { title: 'Detail', tech });
    });
  }
