var db=require('../database');
module.exports={
   
  editData:function(editId, callback){
    console.log(editId)
    var sql=`SELECT * FROM items WHERE itemNumber=${editId}`;
    db.query(sql, function (err, data) {
      if (err) throw err;
      return callback(data[0]);
    });
  },
  updateData:function(inputData,updateId,callback){
    
    var sql = `UPDATE items SET ? WHERE itemNumber= ?`;
    db.query(sql, [inputData, updateId], function (err, data) {
    if (err) throw err;
     return callback(data);
  });
  }
}