import { getAllCarts, getSingleCartsById } from "./cart.get.js";
import addCarts from "./cart.post.js";

const carts = { getAllCarts, getSingleCartsById, addCarts };

export default carts;
