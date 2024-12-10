const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
  productName: { type: String, required: true },
  stockLevel: { type: Number, required: true },
  reorderLevel: { type: Number, required: true },
  category: {type: mongoose.Schema.Types.ObjectId,
            ref: 'Category'},
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Inventory', InventorySchema, 'Inventorys');
