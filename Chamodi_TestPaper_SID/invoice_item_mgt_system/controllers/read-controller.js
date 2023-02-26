var readModel=require('../models/read-model');
module.exports={
 readData:function(req,res){
    
    readModel.readData(function(data){
    res.render('admin/read-items', {fetchData:data}); 
    });
  }
}