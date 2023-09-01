import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  addOrderItem,
  getOrderItem,
  deleteOrderItem,
  updateOrderItem,
} from "../controllers/ordersItem.js";

const router = express.Router();
//CREATE
router.post("/addOrderItem", verifyToken, addOrderItem);

// READ
router.get("/:orderId", getOrderItem);

// UPDATE
router.patch("/update", updateOrderItem);

// DELETE
router.delete("/:orderItemId/delete", deleteOrderItem);

export default router;
