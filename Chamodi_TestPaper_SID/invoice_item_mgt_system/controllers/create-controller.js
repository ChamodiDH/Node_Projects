var createModel=require('../models/create-model');
module.exports={
crudForm:function(req, res) {
    res.render('admin/ItemRegistration');
},
createData:function(req,res){
  const inputData= {
    itemNumber:     req.body.itemNumber,
    name: req.body.Name,
    description:         req.body.Description,
    buyingPrice:      req.body.Buyingprice,
    sellingPrice:      req.body.Sellingprice,
    itemStock:      req.body.itemStock,
    itemRecLevel:      req.body.itemrec,
    itemQty:      req.body.itemRecorderQuantity,
  };
createModel.createData(inputData,function(data){
      res.redirect('/admin/item-registration');
      console.log(data.affectedRows + " record created for item");
    });
}
}