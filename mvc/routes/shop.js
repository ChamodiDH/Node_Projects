const express = require('express')
const router = express.Router()
const path = require('path')
const shopController = require('../controller/shop')

router.get('/',shopController.getIndex)
router.get('/products',shopController.getProduct)
router.get('/cart', shopController.getCart)
router.get('/orders', shopController.getOrders)
router.get('/checkout', shopController.getCheckout)

module.exports = router