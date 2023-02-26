var db=require('../database');
module.exports={
  searchData:function(callback){
    
    return callback();
      
  },

  searchInvoice: function(id,callback){
    var invoiceId = id;
    //var sql='SELECT * FROM items';
    var sql = `SELECT * FROM invoice WHERE number = ${invoiceId}`
    db.query(sql, function (err, data) {
    if (err) throw err;
    return callback(data);
    });
  }
 
}