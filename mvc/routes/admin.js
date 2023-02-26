const { Router } = require('express')
const express = require('express')
const router = express.Router()
const path = require('path')

const adminController = require('../controller/admin')




router.get('/add-product',adminController.getAddProduct)

router.get('/products',adminController.getProducts)

router.post('/add-product',adminController.postAddProduct)//post is used so that this request will work only for post methods.

// exports.routes = router
// exports.products = products

module.exports = router