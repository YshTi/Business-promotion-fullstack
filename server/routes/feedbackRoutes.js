import express from "express";
import Feedback from "../models/Feedback.js";

const router = express.Router();

// GET /api/feedback
router.get("/", async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: feedback.length,
      data: feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error.",
      error: error.message,
    });
  }
});

// POST /api/feedback
router.post("/", async (req, res) => {
  try {
    const { rating, text, name, role, avatar } = req.body;

    if (!rating || !text || !name || !role || !avatar) {
      return res.status(400).json({
        success: false,
        message: "Rating, text, name, role, and avatar are required.",
      });
    }

    const newFeedback = await Feedback.create({
      rating,
      text,
      name,
      role,
      avatar,
    });

    res.status(201).json({
      success: true,
      message: "Feedback created successfully.",
      data: newFeedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error.",
      error: error.message,
    });
  }
});

export default router;