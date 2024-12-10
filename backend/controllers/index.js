const registerController = require('./auth/registerController');
const loginController = require('./auth/loginController');
const CategoryController = require('./CategoryController');
const InventoryController = require('./InventoryController');

module.exports = { registerController, loginController, CategoryController, InventoryController };