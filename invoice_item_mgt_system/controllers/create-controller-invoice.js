var createModel=require('../models/create-model-invoice');
module.exports={
crudForm:function(req, res) {
    res.render('admin/InvoiceForm');
},
createData:function(req,res){
  const inputData= {
    date:     req.body.date,
    customerName: req.body.CustomerName,
    totalValue:         req.body.totalval,
    itemName:      req.body.itemName,
    quantity:      req.body.quantity,
    
  };
createModel.createData(inputData,function(data){
      res.redirect('/admin/add-invoice');
   
      console.log(data.affectedRows + " record created for invoice");
    });
}
}