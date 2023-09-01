import mongoose from "mongoose";

const orderItemSchema = mongoose.Schema(
  {
    orderId: String,
    productId: String,
    quanlity: Number,
    size: Number,
    color: String,
    isOrder: Boolean,
  },
  { timestamps: true }
);

const OrderItem = mongoose.model("orderitems", orderItemSchema);
export default OrderItem;
