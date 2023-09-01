import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    status: {
      type: Boolean,
      require: true,
    },
  },
  { timestamps: true }
);

const Orders = mongoose.model("orders", orderSchema);
export default Orders;
