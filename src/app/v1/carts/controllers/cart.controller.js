import { getAllCarts, getSingleCartsById } from "./cart.get.js";
import addCarts from "./cart.post.js";
import { deleteCartById, deleteCartByUniquekey } from "./cart.delete.js";
import { updateCartById, updateCartByUniquekey } from "./cart.patch.js";

const carts = {
  getAllCarts,
  getSingleCartsById,
  addCarts,
  updateCartById,
  updateCartByUniquekey,
  deleteCartById,
  deleteCartByUniquekey,
};

export default carts;
