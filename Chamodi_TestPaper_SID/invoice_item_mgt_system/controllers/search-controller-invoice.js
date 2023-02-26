var searchModel=require('../models/search-model-invoice');
module.exports={
 searchData:function(req,res){
    
    searchModel.searchData(function(data){
    res.render('admin/search-invoice'); 
    });
  },

  searchInvoice:function(req,res){
    var id = req.body.NumberS
    console.log('model:'+ req.body.number)
    searchModel.searchInvoice(id,function(data){
    res.render('admin/search-invoice-data',{data:data}); 
    });
  }
}