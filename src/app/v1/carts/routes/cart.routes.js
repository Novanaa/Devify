import express from "express";
import carts from "../controllers/cart.controller.js";
import verifyToken from "../../../../middlewares/verifyToken.js";
const router = express.Router();

router.get("/", carts.getAllCarts);
router.get("/:id", verifyToken, carts.getSingleCartsById);

export default router;
