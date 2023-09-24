import express from "express";
import main from "../controllers/main.js";
import verifyToken from "../../../../middlewares/verifyToken.js";
const router = express.Router();

// routes
router.get("/", verifyToken, main);

export default router;
