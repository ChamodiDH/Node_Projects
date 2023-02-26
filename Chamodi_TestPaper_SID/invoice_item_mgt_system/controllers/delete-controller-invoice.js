var deleteModel=require('../models/delete-model-invoice');
module.exports={
deleteData:function(req,res){
   
  const deleteId=req.params.id;
  deleteModel.deleteData(deleteId,function(data){
    res.redirect('/admin/read-invoice');
    console.log(data.affectedRows + " record deleted");
  });
 
}
}
