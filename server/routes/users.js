import express from "express";

import {
  getUser,
  getUserFriends,
  addRemovefriend,
  updateUser,
} from "../controllers/users.js";

import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// READ
router.get("/:id", getUser);

// UPDATE
router.post("/:id/update", updateUser);
export default router;
