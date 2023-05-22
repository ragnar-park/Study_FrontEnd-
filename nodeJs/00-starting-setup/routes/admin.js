const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const rootDir = require('../util/path');

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', productsController.getAddProductPath);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
// exports.routes = router;
