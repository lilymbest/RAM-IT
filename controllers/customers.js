var Customer = require('../models/Customer');

module.exports = {
    index
};
  
function index(req, res, next) {
    console.log(req.query)
    let modelQuery = req.query.date ? {date: new RegExp(req.query.date, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'date';
    Foster.find(modelQuery)
    .sort(sortKey).exec(function(err, customers) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('customer/index', {
        customer,
        user: req.user,
        date: req.query.date,
        sortKey
      });
    });
}