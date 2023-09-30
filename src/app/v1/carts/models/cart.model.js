import mongoose from "mongoose";
import uniquekey from "../../../../utils/uniquekey.js";

const CartsSchema = new mongoose.Schema({});

uniquekey(CartsSchema);

export const CartsModel = mongoose.model("carts", CartsSchema);
