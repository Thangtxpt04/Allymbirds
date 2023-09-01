import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Order from "../models/Order.js";
import OrderItem from "../models/OrderItem.js";

/* REGISTER USER */
export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      birtday: "",
      fullName: "",
      gender: "",
      address: "",
      phone: "",
    });
    const savedUser = await newUser.save();

    const newOrder = new Order({
      userId: savedUser._id,
      status: false,
    });
    await newOrder.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ msg: "Tên tài khoản đã tồn tại" });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "Tài khoản hoặc mật khẩu chưa chính xác" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(400)
        .json({ msg: "Tài khoản hoặc mật khẩu chưa chính xác" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    const order = await Order.findOne({ userId: user._id, status: false });

    const ProductsOrder = await OrderItem.find({
      orderId: order._id,
      isOrder: false,
    });
    delete user.password;
    res.status(200).json({
      token,
      user,
      orderId: order._id,
      productCartLength: ProductsOrder.length,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
