var readModel=require('../models/read-model-invoice');
module.exports={
 readData:function(req,res){
    
    readModel.readData(function(data){
    res.render('admin/read-invoice', {fetchData:data}); 
    });
  }
}