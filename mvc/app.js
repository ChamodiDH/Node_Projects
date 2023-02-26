//const http = require("http")
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
//import { create } from 'express-handlebars';




//const routes = require("./routes")
const app = express()


app.set('view engine','ejs')
app.set('views','views')//where to find the templates

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controller/error')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))


app.use('/admin',adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)



//const server = http.createServer(app)

app.listen(3000)