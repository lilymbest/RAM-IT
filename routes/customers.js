var express = require('express');
var router = express.Router();
var customersCtrl = require('../controllers/customers');

router.get('/index', customersCtrl.index); //path : /customers/
router.get('/new', customersCtrl.new);
router.post('/index', customersCtrl.create);

module.exports = router;