import express from "express";
import storage from "../storage/index.js";
// multer để xử lý tệp tin được tải lên từ máy khách.
import multer from "multer";
import { login } from "../controllers/auth.js";
import { register } from "../controllers/auth.js";

const router = express.Router();
const upload = multer({ storage });

router.post("/login", login);
router.post("/register", register);

export default router;
