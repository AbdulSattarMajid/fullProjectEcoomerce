import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
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

    // ✅ Updated role to match frontend
    role: {
      type: String,
      enum: ["Customer", "Seller", "Courier", "Admin"],
      default: "Customer",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
