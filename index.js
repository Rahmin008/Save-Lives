import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./utils/db.js";

// Routes
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
  connectDB();
});
