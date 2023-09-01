import Category from "../models/Category.js";

// READ
export const getCategories = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// READ
export const getCategoryById = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);
    res.status(200).json(category);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
