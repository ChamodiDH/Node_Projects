const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
let _db

const MongoConnect = (callback) => {

    MongoClient.connect('mongodb+srv://chamodi3797:7Un9yziq0tVDFxrD@cluster0.kmqiivj.mongodb.net/shop?retryWrites=true&w=majority').then(
        client => {
            console.log("Connected")
            _db = client.db()
            callback()
        }
        ).catch(
        err => {
            console.log(err)
            throw err
        }
        )



}

const getDb = () => {
    if(_db){
        return _db
    }
    throw 'No database found'
}

exports.mongoConnect = MongoConnect
exports.getDb = getDb
