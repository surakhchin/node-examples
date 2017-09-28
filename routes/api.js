var express = require('express');
var router = express.Router();



//model handle database schema from node restful model
var Product = require('../models/product');




//Routes
Product.methods(['get','put','post','delete']);
Product.register(router, '/products');



//We change the route because we are using rest
router.get('/products', function (req,res) {
    res.send('api is working');
});










//Return router
module.exports = router;