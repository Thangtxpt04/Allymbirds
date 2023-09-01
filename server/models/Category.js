import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("categories", CategorySchema);
export default Category;
