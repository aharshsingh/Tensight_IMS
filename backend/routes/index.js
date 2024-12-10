const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const { registerController, loginController, CategoryController, InventoryController } = require('../controllers')

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.post('/addCategory', CategoryController.addCategory);
router.post('/addInventory', InventoryController.addInventory);
router.get('/getallcategory', CategoryController.getAllCategory);
router.get('/getproduct/:category', InventoryController.getProduct);
router.delete('/rmcategory/:category', CategoryController.rmCategory);
router.get('/getStock/:product', InventoryController.getStock);
router.patch('/updateStock/:product', InventoryController.updateStock);
router.get('/riskproduct', InventoryController.riskProduct)
module.exports = router;