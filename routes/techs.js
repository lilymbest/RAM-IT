var router = require('express').Router();
var techCtrl = require('../controllers/techs');

router.get('/', techCtrl.index);
router.get('/:id', techCtrl.show);
router.delete('/:id', techCtrl.resolve);

module.exports = router;

