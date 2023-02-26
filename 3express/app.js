//const http = require("http")
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
//import { create } from 'express-handlebars';




//const routes = require("./routes")
const app = express()


app.set('view engine','ejs')
app.set('views','views')//where to find the templates

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))


app.use('/admin',adminData.routes)
app.use(shopRoutes)

app.use((req,res,next) => {
    res.status(404).render('404',{pageTitle:'Page Not Found'})
})



//const server = http.createServer(app)

app.listen(3000)