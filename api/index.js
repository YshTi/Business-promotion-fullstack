import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import contactRoutes from "../server/routes/contactRoutes.js";
import feedbackRoutes from "../server/routes/feedbackRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
}

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "MongoDB connection error",
      error: error.message,
    });
  }
});

app.get("/", (req, res) => {
  res.send("Backend is running on Vercel");
});

app.use("/api/contact", contactRoutes);
app.use("/api/feedback", feedbackRoutes);

export default app;