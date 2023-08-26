import express from "express";
import { getUser } from "../controllers/users.js";
import { verifyToken } from "../middleware.js/auth.js";

const router = express.Router();

//Get routes
router.get("/:id", verifyToken, getUser);

export default router;
