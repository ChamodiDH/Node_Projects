var db=require('../database');
module.exports={
  searchItemData:function(callback){
    
    return callback();
      
  },

  searchItem: function(id,callback){
    var itemId = id;
    //var sql='SELECT * FROM items';
    var sql = `SELECT * FROM items WHERE itemNumber = ${itemId}`
    db.query(sql, function (err, data) {
    if (err) throw err;
    return callback(data);
    });
  }
 
}