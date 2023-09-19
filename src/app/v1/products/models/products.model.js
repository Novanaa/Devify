import mongoose from "mongoose";
import uniquekey from "../../../../utils/uniquekey.js";

// Products Schemas
const ProductsShcema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
  location: {
    type: String,
  },
  rating: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  image: {
    type: String,
  },
});

// Rename _id to Uniquekey
uniquekey(ProductsShcema);

// Products Categories
export const productsCategories = [
  "Jewelry",
  "Men's",
  "Women's",
  "Electronics",
  "Furniture",
];

//
const JEWELRY = "jewelry";
const FURNITURE = "furniture";
const MENS = "mens";
const WOMENS = "womens";
const ELECTRONICS = "electronics";

export const categoryMappings = {
  jewelry: JEWELRY,
  furniture: FURNITURE,
  mens: MENS,
  womens: WOMENS,
  electronics: ELECTRONICS,
  [productsCategories[0]]: JEWELRY,
  [productsCategories[1]]: MENS,
  [productsCategories[2]]: WOMENS,
  [productsCategories[3]]: ELECTRONICS,
  [productsCategories[4]]: FURNITURE,
};

// Products Model
export const ProductsModel = mongoose.model("products", ProductsShcema);
