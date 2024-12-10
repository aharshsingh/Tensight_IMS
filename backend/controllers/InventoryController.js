const Inventory = require('../models/Inventory');
const {InventorySchema} = require('../service/validator');
const Category = require('../models/Category');

const InventoryController = {
    async addInventory(req,res,next){
        const { error } = InventorySchema.validate(req.body);
        if(error){
            return next(error);
        }
        let result;
        try {
            
            const { productName, stockLevel, reorderLevel, category } = req.body;

            const categoryDoc = await Category.findOne({ categoryName: category });
            if (!categoryDoc) {
                return res.status(404).json({ message: 'Category not found' });
            }
            const product = new Inventory({
                productName, 
                stockLevel, 
                reorderLevel, 
                category: categoryDoc._id 
            });
            result = await product.save();

        } catch (error) {
            return next(error);
        }
        res.send("Product added to inventory successfully " + result);
    },
    async getProduct(req,res,next){
        let result;
        try {
            const categoryId = await Category.findOne({ categoryName: req.params.category });
            result = await Inventory.find({ category: categoryId }).select(' -lastUpdated -__v -reorderLevel -category');
        } catch (error) {
            return next(error);
        }
        res.send(result);
    },
    async getStock(req,res,next){
        let result;
        try {
            result = await Inventory.findOne({ productName: req.params.product }).select(' -lastUpdated -__v -reorderLevel -category -_id -productName');
        } catch (error) {
            return next(error);
        }
        res.send(result);
    },
    async updateStock(req, res, next) {
        try {
            const stock = await Inventory.findOne({ productName: req.params.product }).select('stockLevel');
            if (!stock) {
                return res.status(404).json({ message: 'Stock not found' });
            }
            const updatedStock = req.body.updateStock + stock.stockLevel;
            const updatedProduct = await Inventory.findOneAndUpdate(
                { productName: req.params.product }, 
                { stockLevel: updatedStock },       
                { new: true }                       
            ).select('productName stockLevel');
    
            res.status(200).json(updatedProduct);
        } catch (error) {
            next(error);
        }
    },
    async riskProduct(req, res, next) {
        try {
            const result = await Inventory.find({
                $expr: { $lte: ["$stockLevel", "$reorderLevel"] } 
            }).select('-lastUpdated -__v');
            res.status(200).json(result);
        } catch (error) {
            return next(error); 
        }
    }    
}

module.exports = InventoryController;
