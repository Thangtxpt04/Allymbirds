import express from "express";
import { getCategories, getCategoryById } from "../controllers/categories.js";

const router = express.Router();
// READ
router.get("/:categoryId", getCategoryById);
router.get("/", getCategories);

export default router;
