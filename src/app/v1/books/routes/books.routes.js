import express from "express";
import books from "../controllers/books.controller.js";
const router = express.Router();

router.get("/", books.getAllBooks);
router.get("/search", books.searchQueriesBooks);
router.get("/categories", books.getAllBookscategories);
router.get("/categories/:category", books.getSingleBookCategory);
router.get("/:id", books.getSingleBookById);
router.get("/key/:id", books.getSingleBookByUniquekey);
router.post("/", books.addBooksData);

export default router;
