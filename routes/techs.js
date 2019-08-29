var router = require('express').Router();
var techCtrl = require('../controllers/techs');

router.get('/', isLoggedIn, techCtrl.index);
router.get('/tickets', isLoggedIn, techCtrl.show);
router.get('/clock', isLoggedIn, techCtrl.clock);
router.delete('/tickets/:id', isLoggedIn, techCtrl.delete);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;

