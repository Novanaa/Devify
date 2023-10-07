import { getAllCarts, getSingleCartsById } from "./cart.get.js";
import addCarts from "./cart.post.js";
import { deleteCartById, deleteCartByUniquekey } from "./cart.delete.js";

const carts = {
  getAllCarts,
  getSingleCartsById,
  addCarts,
  deleteCartById,
  deleteCartByUniquekey,
};

export default carts;
