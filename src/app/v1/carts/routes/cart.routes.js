import express from "express";
import carts from "../controllers/cart.controller.js";
import verifyToken from "../../../../middlewares/verifyToken.js";
const router = express.Router();

router.get("/", carts.getAllCarts);
router.get("/:id", verifyToken, carts.getSingleCartsById);
router.post("/", carts.addCarts);
router.patch("/:id", carts.updateCartById);
router.patch("/key/:id", carts.updateCartByUniquekey);
router.delete("/:id", carts.deleteCartById);
router.delete("/key/:id", carts.deleteCartByUniquekey);

export default router;
