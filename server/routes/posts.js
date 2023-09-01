import express from "express";
import multer from "multer";
import storage from "../storage/index.js";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
  createPost,
  deletePost,
  addComment,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
const upload = multer({ storage });
// READ
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// UPDATE
router.post("/createPost", verifyToken, upload.single("picture"), createPost);
router.patch("/:id/like", verifyToken, likePost);
router.patch("/:id/addComment", verifyToken, addComment);

//DELETE
router.delete("/:id/delete", verifyToken, deletePost);

export default router;
