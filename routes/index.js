var express = require('express');
var router = express.Router();

const indexController = require('../config/controller/indexController')


/* GET home page. */
router.get('/', indexController.index);

router.post('/addProduct', indexController.addProduct);

router.post('/editProduct/:id', indexController.editProduct);

router.post('/deleteProduct/:id', indexController.deleteProduct);


module.exports = router;
