var deleteModel=require('../models/delete-model');
module.exports={
deleteData:function(req,res){
   
  const deleteId=req.params.id;
  deleteModel.deleteData(deleteId,function(data){
    res.redirect('/admin/read');
    console.log(data.affectedRows + " record deleted");
  });
 
}
}
