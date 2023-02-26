var searchModel=require('../models/search-model-item');
module.exports={
 searchItemData:function(req,res){
    
    searchModel.searchItemData(function(data){
    res.render('admin/search-item'); 
    });
  },

  searchItem:function(req,res){
    var id = req.body.itemNumber
    //console.log('model:'+ req.body.number)
    searchModel.searchItem(id,function(data){
    res.render('admin/search-item-data',{data:data}); 
    });
  }
}