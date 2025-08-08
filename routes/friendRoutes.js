import express from "express";
import Friend from "../models/Friend.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, async (req, res) => {
  const { name, phone, email } = req.body;

  if (!name) return res.status(400).json({ message: "Friend name is required" });

  const friend = await Friend.create({
    user: req.user._id,
    name,
    phone,
    email
  });

  res.json(friend);
});

router.get("/", protect, async (req, res) => {
  const friends = await Friend.find({ user: req.user._id });
  res.json(friends);
});

export default router;
