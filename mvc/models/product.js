//const products = []
const fs = require('fs')
const path = require('path')

const p = path.join(path.dirname(process.mainModule.filename),'data','products.json')

const getProductFromFile = cb => {
   
    fs.readFile(p, (err,fileContent) => {
        if(err){
         cb([])
        }else{
            cb(JSON.parse(fileContent))
        }

     
    })
}

module.exports = class Product {
    constructor(title,imageUrl,description,price){

        this.title = title
        this.imageUrl = imageUrl
        this.description = description
        this.price = price

    }

    save(){
       // products.push(this)
        getProductFromFile(products => {
            products.push(this) //push either to the new one or the one that read from the file //make sure to use the arrow function here so that 'this' refers to the class
            // writes back to the file
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })

     
    }

    static fetchAll(cb){ //we are using cb as a callback function here since fs.read file is asynchronous and the fetch all does not return
       
       getProductFromFile(cb)

    }
}