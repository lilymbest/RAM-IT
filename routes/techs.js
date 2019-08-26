var express = require('express');
var router = express.Router();
var techCtrl = require('../controllers/techs');

/* GET users listing. */
router.get('/', techCtrl.index);
// router.get('/new', techCtrl.new);
// router.post('/', techCtrl.create);
// router.get('/:id', techCtrl.show);

module.exports = router;

