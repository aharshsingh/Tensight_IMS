const joi = require('joi');
const Category = require('../models/Category');

const CategoryController = {
    async addCategory(req,res,next){
        const CategorySchema = joi.object({
            categoryName: joi.string().required()
        });
        const { error } = CategorySchema.validate(req.body);
        if(error){
            return next(error);
        }
        let result;
        try {
            const { categoryName } = req.body;

            const existingCategory = await Category.findOne({ categoryName });
            if (existingCategory) {
                return res.status(400).json({ error: 'Category name already exists.' });
            }

            const category = new Category({ 
                categoryName
            });
            result = await category.save();
        } catch (error) {
            return next(error);
        }
        res.send("Category added successfully :" + result);
    },
    async getAllCategory(req,res,next){
        let result;
        try {
            result = await Category.find().select(' -updatedAt -createdAt -__v');
        } catch (error) {
            return next(error);
        }
        res.send(result);
    },
    async rmCategory(req,res,next){
        try {
            await Category.deleteOne({ categoryName: req.params.category });
        } catch (error) {
            return next(error);
        }
        res.send("Deleted successfully");
    }
}

module.exports = CategoryController;