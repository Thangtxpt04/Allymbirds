import OrderItem from "../models/OrderItem.js";

// CREATE
export const addOrderItem = async (req, res) => {
  try {
    const { orderId, productId, quanlity, color, size, isOrder } = req.body;
    const checkOrder = await OrderItem.findOne({
      orderId,
      productId,
      color,
      size,
    });

    if (checkOrder) {
      await OrderItem.findByIdAndUpdate(checkOrder._id, {
        quanlity: quanlity + checkOrder.quanlity,
      });
    } else {
      const newOrderItem = new OrderItem({
        orderId,
        productId,
        quanlity,
        color,
        size,
        isOrder,
      });
      await newOrderItem.save();
    }
    res.status(201).json(checkOrder ? 0 : 1);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// READ

export const getOrderItem = async (req, res) => {
  try {
    const { orderId } = req.params;
    const orderItems = await OrderItem.find({ orderId, isOrder: false });
    res.status(200).json(orderItems);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// UPDATE
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { inputComment } = req.body;
    const post = await Post.findById(id);
    post.comments.push(inputComment);

    await post.save();
    console.log(post);

    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateOrderItem = async (req, res) => {
  try {
    const { orderItemsId } = req.body;

    await OrderItem.updateMany(
      { _id: { $in: orderItemsId } },
      { $set: { isOrder: true } }
    );

    res.status(201).json("Success");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// DELETE
export const deleteOrderItem = async (req, res) => {
  try {
    const { orderItemId } = req.params;
    const { orderId } = req.body;
    await OrderItem.findByIdAndDelete({ _id: orderItemId });
    const orderItems = await OrderItem.find({ orderId, isOrder: false });

    res.status(200).json(orderItems);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
