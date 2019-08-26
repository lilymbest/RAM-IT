var express = require('express');
var router = express.Router();
var techCtrl = require('../controllers/techs');

/* GET users listing. */
router.get('/', techCtrl.index);
// router.get('/new', techCtrl.new);
// router.post('/', techCtrl.create);
// router.get('/:id', techCtrl.show);
function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;

