var express = require('express');
var router = express.Router();
var customersCtrl = require('../controllers/customers');

router.get('/', customersCtrl.index)
router.get('/new', customersCtrl.new);

module.exports = router;