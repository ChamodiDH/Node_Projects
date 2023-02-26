const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
const createController = require('../controllers/create-controller');
const createController2 = require('../controllers/create-controller-invoice');
const readController = require('../controllers/read-controller');
const readController2 = require('../controllers/read-controller-invoice');

const updateController=require('../controllers/update-controller');
const updateController2=require('../controllers/update-controller-invoice');
const deleteController=require('../controllers/delete-controller');
const deleteController2=require('../controllers/delete-controller-invoice');

const searchController2=require('../controllers/search-controller-invoice');
const searchController=require('../controllers/search-controller-item');


const router = express.Router();

// /admin/add-product => GET
// router.get('/add-product', adminController.getAddProduct);

// // /admin/products => GET
// router.get('/products', adminController.getProducts);

// // /admin/add-product => POST
// router.post('/add-product', adminController.postAddProduct);

router.get('/item-registration', adminController.getItemRegistration);
router.post('/register-item', createController.createData);

router.get('/add-invoice', adminController.getInvoice);
router.post('/register-invoice', createController2.createData);
router.get('/read', readController.readData);
router.get('/read-invoice', readController2.readData);

router.get('/edit/:id', updateController.editData);
router.get('/edit/invoice/:id', updateController2.editData);
// to update data 
router.post('/update/:id', updateController.updateData);
router.post('/update/invoice/:id', updateController2.updateData);
router.get('/delete/:id', deleteController.deleteData);
router.get('/delete/invoice/:id', deleteController2.deleteData);

//search invoice
router.get('/invoice/search',searchController2.searchData)
router.post('/search-invoice',searchController2.searchInvoice)
//search item
router.get('/item/search',searchController.searchItemData)
router.post('/search-item',searchController.searchItem)





module.exports = router;
