import express from "express";
import { getProduct, getProductCategory } from "../controllers/products.js";
const router = express.Router();

// READ
router.get("/:categoryId", getProductCategory);
router.get("/:productId/productDetail", getProduct);

export default router;
