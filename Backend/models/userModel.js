import jwt from "jsonwebtoken";

import mongoose from "mongoose";
const { verify } = jwt;
const userShema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    profilePicture: { type: String, default: "" },
    address: { type: String, default: "" },
    phone: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
    refresh_token: { type: String, default: "" },
    verify_email: { type: Boolean, default: false },
    forgotPasswordToken: { type: String, default: "" },
    forgotPasswordExpiry: { type: Date, default: null },
    role: { type: String, enum: ["User", "Admin"] }, // Added role field
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userShema);
export default User;
