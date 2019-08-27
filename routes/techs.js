var router = require('express').Router();
var techCtrl = require('../controllers/techs');

/* GET users listing. */
router.get('/tech', techCtrl.index);
router.get('tech/show', techCtrl.show);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('tech');
}

module.exports = router;

