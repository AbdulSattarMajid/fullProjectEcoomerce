import { useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const AuthForm = ({
  mode, // "Login" or "Signup"
  onSubmit,
  isLoading,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  confirmPassword,
  name,
  email,
  password,
  alternateLinkText,
  alternateLinkAction,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-8 w-full max-w-md shadow"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          {mode === "Login" ? "Login" : "Create Account"}
        </h2>

        <form onSubmit={onSubmit}>
          {mode === "Signup" && (
            <div className="border border-gray-300 px-6 py-3 flex items-center gap-3 rounded-full">
              <img src={assets.profile_icon} alt="Name" className="w-5 h-5" />
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Full name"
                className="w-full focus:outline-none"
                required
              />
            </div>
          )}

          <div className="border border-gray-300 px-6 py-3 flex items-center gap-3 rounded-full mt-4">
            <img src={assets.email_icon} alt="Email" className="w-5 h-5" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email address"
              className="w-full focus:outline-none"
              required
            />
          </div>

          <div className="border border-gray-300 px-6 py-3 flex items-center gap-3 rounded-full mt-4">
            <img src={assets.lock_icon} alt="Password" className="w-5 h-5" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="w-full focus:outline-none"
              minLength={6}
              required
            />
          </div>
          {mode === "Signup" && (
            <div className="border border-gray-300 px-6 py-3 flex items-center gap-3 rounded-full mt-4">
              <img src={assets.lock_icon} alt="Confirm Password" className="w-5 h-5" />
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                type="password"
                placeholder="Confirm Password"
                className="w-full focus:outline-none"
                minLength={6}
                required
              />
            </div>
          )}


          {mode === "Login" && (
            <p className="text-sm text-red-600 my-4 cursor-pointer">
              Forgot password?
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-600 w-full text-white py-3 rounded-full font-medium mt-2 hover:bg-blue-700 transition disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : mode === "Login" ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="mt-5 text-center text-gray-600">
          {alternateLinkText}
          <span
            className="text-yellow-600 font-medium ml-1 cursor-pointer"
            onClick={alternateLinkAction}
          >
            {mode === "Login" ? "Sign up" : "Login"}
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthForm;
