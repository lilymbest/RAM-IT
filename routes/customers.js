var express = require('express');
var router = express.Router();
var customersCtrl = require('../controllers/customers');

router.get('/index', customersCtrl.index); //path : /customers/
router.get('/new', customersCtrl.new);
router.post('/index', customersCtrl.create);
router.get('/index/:id/edit', customersCtrl.edit)
router.put('/index/:id', customersCtrl.update)

module.exports = router;