const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../util/path')
const adminData = require('./admin')

router.get('/',(req,res,next) => {
    console.log('middle ware 2')
    console.log(adminData.products)
    //res.send('<h1>Hello Express!</h1>')
    const products = adminData.products
    res.render('shop',{prods:products, pageTitle:"Shop", path:'/'}) //through render we are reffering to the view
})

module.exports = router