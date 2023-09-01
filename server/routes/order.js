import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { createOrder, getOrder, updateOrder } from "../controllers/order.js";

const router = express.Router();

// CREATE
router.post("/createOrder", verifyToken, createOrder);

// READ
router.get("/:userId", getOrder);

// UPDATE
router.patch("/:orderId/update", updateOrder);
export default router;
