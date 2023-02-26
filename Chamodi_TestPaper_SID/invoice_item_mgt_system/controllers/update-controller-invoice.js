var updateModel=require('../models/update-model-invoice');
module.exports={
editData:function(req,res){
    console.log('controller file:' + req.params.id)
    const editId=req.params.id;
    console.log('number:'+editId)////
    updateModel.editData(editId,function(data){
      res.render('admin/InvoiceForm', { editData:data});
      console.log(data.affectedRows + " record fetched");
    });
   
},
updateData:function(req,res){
  const inputData= { 
    number:req.body.Number,
    date:req.body.date,
    customerName: req.body.CustomerName,
    totalValue:         req.body.totalval,
    itemName:      req.body.itemName,
    quantity:      req.body.quantity,
  }; 
  console.log()
  const updateId= req.body.Number;////
  updateModel.updateData(inputData,updateId,function(data){
    res.redirect('/admin/read-invoice');
    console.log(data.affectedRows + " record(s) updated");
  }); 
}
}