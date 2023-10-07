import mongoose from "mongoose";
import uniquekey from "../../../../utils/uniquekey.js";

const CartsSchema = new mongoose.Schema({
  id: {
    type: Number,
    index: true,
  },
  userId: {
    type: Number,
  },
  products: [
    {
      productsId: { type: Number },
      quantity: { type: Number },
      price: { type: Number },
    },
  ],
  total: { type: Number },
  delivery_cost: { type: Number },
  free_delivery: { type: Boolean },
  total_products: { type: Number },
  tax: { type: Number },
});

uniquekey(CartsSchema);

export const CartsModel = mongoose.model("carts", CartsSchema);
