import jwt from "jsonwebtoken";
import UserModel from "../models/userModel.js";

const generateRefreshtoken = async (user) => {
  const token = await jwt.sign(
    {
      id: user._id,
    },
    process.env.SECRET_KEY_REFRESH_Token,
    { expiresIn: "7d" }
  );

  await UserModel.updateOne({ _id: user._id }, { refresh_token: token });

  return token;
};

export default generateRefreshtoken;
