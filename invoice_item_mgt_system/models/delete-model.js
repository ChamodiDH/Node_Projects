var db=require('../database');
module.exports={
  deleteData:function(deleteId,callback){
    var sql = 'DELETE FROM items WHERE itemNumber = ?';
    db.query(sql, [deleteId], function (err, data) {
    if (err) throw err;
     return callback(data);
  });
  }
}