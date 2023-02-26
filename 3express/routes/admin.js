const express = require('express')
const router = express.Router()
const path = require('path')

const rootDir = require('../util/path')
const products = []



router.get('/add-product',(req,res,next) =>{
    console.log('middleware 1')
    //res.send('<form action = "/admin/add-product" method ="POST"><input type="text" name="title"><button type="submit">Send</button></form>')
    //res.sendFile(path.join(rootDir,'views','add-product.html'))
    res.render('add-product',{pageTitle:'Add-Product', path:'/admin/add-product'})
    
})

router.post('/add-product',(req,res,next) => {
    //console.log(req.body)
    products.push({title:req.body.title})
    res.redirect('/')
}) //post is used so that this request will work only for post methods.

exports.routes = router
exports.products = products