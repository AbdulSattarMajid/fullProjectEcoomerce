import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/connectDB.js";
import userRoute from "./Routes/userRoute.js";
dotenv.config();

const app = express();
app.get((req, res) => {
  res.send("Hello World");
});


app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173", // ✅ no slash
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the E-commerce API" + PORT });
});
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit the process with failure
  });
