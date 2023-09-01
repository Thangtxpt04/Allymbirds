import Order from "../models/Order.js";
import User from "../models/User.js";
import OrderItem from "../models/OrderItem.js";

// CREATE
export const createOrder = async (req, res) => {
  try {
    const { userId } = req.body;
    const newOrder = new Order({
      userId,
      status: false,
    });
    await newOrder.save();
    res.status(201).json({ orderId: newOrder._id });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// READ
export const getOrder = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await Order.find({ userId });
    res.status(200).json(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// UPDATE
export const updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    await Order.findByIdAndUpdate(orderId, {
      status: true,
    });

    const { userId } = req.body;
    console.log(userId);
    const newOrder = new Order({
      userId,
      status: false,
    });
    await newOrder.save();

    await OrderItem.updateMany({ orderId }, { $set: { isOrder: true } });

    res.status(201).json({ orderId: newOrder._id });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
