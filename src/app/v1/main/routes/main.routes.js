import express from "express";
import main from "../controllers/main.js";
const router = express.Router();

// routes
router.get("/", main);

export default router;
