const mongoose = require("mongoose");

// Define the IngredientCategory schema

const IngredientCategorySchema = new mongoose.Schema({
  rame: String,
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  ingredients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "IngredientsItem",
  }],
});

const IngredientCategory = mongoose.model('IngredientCategory', IngredientCategorySchema)
module.exports = IngredientCategory;