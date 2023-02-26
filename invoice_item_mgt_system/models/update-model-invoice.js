var db=require('../database');
module.exports={
   
  editData:function(editId, callback){
    console.log('this is the '+editId)
    var sql=`SELECT * FROM invoice WHERE number=${editId}`;
    db.query(sql, function (err, data) {
      if (err) throw err;
      return callback(data[0]);
    });
  },
  updateData:function(inputData,updateId,callback){
    
    var sql = `UPDATE invoice SET ? WHERE number= ?`;
    db.query(sql, [inputData, updateId], function (err, data) {
    if (err) throw err;
     return callback(data);
  });
  }
}