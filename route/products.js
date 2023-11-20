
const express = require('express')
const router = express.Router()
const{
    getAllProducts,getAllProductsStatic} = require('../controller/products')



    router.route('/').get(getAllProducts)
    router.route('/:statics').get(getAllProductsStatic)


    module.exports = router