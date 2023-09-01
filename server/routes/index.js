import authRoutes from "./auth.js";
import userRoutes from "./users.js";
import postRoutes from "./posts.js";
import categoryRoutes from "./categories.js";
import productRoutes from "./products.js";
import orderRoutes from "./order.js";
import orderItemRoutes from "./orderItem.js";

function route(app) {
  app.use("/auth", authRoutes);
  app.use("/users", userRoutes);
  app.use("/categories", categoryRoutes);
  app.use("/products", productRoutes);
  app.use("/posts", postRoutes);
  app.use("/order", orderRoutes);
  app.use("/orderItem", orderItemRoutes);
}

export default route;
