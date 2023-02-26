var updateModel=require('../models/update-model');
module.exports={
editData:function(req,res){
    console.log('controller file:' + req.params.id)
    const editId=req.params.id;
    console.log('items number:'+editId)////
    updateModel.editData(editId,function(data){
      res.render('admin/ItemRegistration', { editData:data});
      console.log(data.affectedRows + " record fetched");
    });
   
},
updateData:function(req,res){
  const inputData= { 
    itemNumber:     req.body.itemNumber,
    name: req.body.Name,
    description:         req.body.Description,
    buyingPrice:      req.body.Buyingprice,
    sellingPrice:      req.body.Sellingprice,
    itemStock:      req.body.itemStock,
    itemRecLevel:      req.body.itemrec,
    itemQty:      req.body.itemRecorderQuantity
  }; 
  const updateId= req.body.itemNumber;////
  updateModel.updateData(inputData,updateId,function(data){
    res.redirect('/admin/read');
    console.log(data.affectedRows + " record(s) updated");
  }); 
}
}