const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const registerSchema = Joi.object({
    userName: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const InventorySchema = Joi.object({
    productName: Joi.string().max(30).required(),
    stockLevel: Joi.number().required(),
    reorderLevel: Joi.number().required(),
    category: Joi.string().required()
});

module.exports = { loginSchema, registerSchema, InventorySchema };
