import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Object,
    },
    category_id: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("products", productSchema);
export default Product;
