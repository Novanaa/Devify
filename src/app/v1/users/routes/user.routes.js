import express from "express";
import users from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", users.getAllUsers);
router.get("/search", users.usersSearchQueries);
router.get("/:id", users.getSingleUserById);
router.get("/key/:id", users.getSingleUserByUniquekey);
router.post("/", users.addUsers);
router.delete("/:id", users.deleteUserById);
router.delete("/key/:id", users.deleteUserByUniquekey);

export default router;
