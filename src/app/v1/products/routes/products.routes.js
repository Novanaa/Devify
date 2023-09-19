import express from "express";
import products from "../controllers/products.controller.js";
const router = express.Router();

//# list of products routes
router.get("/", products.getAllProducts);
router.get("/search", products.searchQueriesProducts);
router.get("/categories", products.getAllProductsCaegories);
router.get("/:id", products.getSingleProduct);
router.get("/key/:id", products.getSingleProductByUniquekey);
router.get("/categories/:category", products.getSingleProductsCategories);
router.post("/", products.addProducts);
router.patch("/:id", products.updateProductsById);
router.patch("/key/:id", products.updateProductsByUniquekey);
router.delete("/:id", products.deleteProductById);
router.delete("/key/:id", products.deleteProductByUniquekey);

export default router;
