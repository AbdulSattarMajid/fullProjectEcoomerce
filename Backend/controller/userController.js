import userModel from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import UserModel from "../models/userModel.js";
import sendEmail from "../config/sendEmail.js";
import verifyEmailTemplate from "../utils/verifyEmailTemplate.js";
import generateAccesstoken from "../utils/generateAccesstoken.js";
import generateRefreshtoken from "../utils/generateRefreshtoken.js";

export async function registerUserController(request, response) {
  try {
    const { name, email, password, role } = request.body; // ✅ added role

    if (!name || !email || !password || !role) {
      return response.status(400).json({
        message: "Provide name, email, password, and role",
        error: true,
        success: false,
      });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return response.json({
        message: "Email already registered",
        error: true,
        success: false,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const newUser = new UserModel({
      name,
      email,
      password: hashPassword,
      role, // ✅ Save role
    });

    const save = await newUser.save();

    const VerifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save._id}`;

    await sendEmail({
      sendTo: email,
      subject: "Verify your email from Binkeyit",
      html: verifyEmailTemplate({
        name,
        url: VerifyEmailUrl,
      }),
    });

const accesstoken = await generateAccesstoken(save._id);
const refreshtoken = await generateRefreshtoken(save._id);

const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "None",
};

response.cookie("accesstoken", accesstoken, cookieOptions);
response.cookie("refreshtoken", refreshtoken, cookieOptions);

const { password: _, ...userWithoutPassword } = save._doc;

return response.status(201).json({
  message: "User registered successfully",
  error: false,
  success: true,
  token: accesstoken,
  user: userWithoutPassword,
});

  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}


export async function verifyEmailController(request, response) {
  try {
    const { code } = request.body;

    const user = await UserModel.findOne({ _id: code });

    if (!user) {
      return response.status(400).json({
        message: "Invalid code",
        error: true,
        success: false,
      });
    }

    const updateUser = await UserModel.updateOne(
      { _id: code },
      {
        verify_email: true,
      }
    );

    return response.json({
      message: "Verify email done",
      success: true,
      error: false,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: true,
    });
  }
}

export async function loginUserController(request, response) {
  try {
    const { email, password } = request.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return response.status(400).json({
        message: "Invalid email or password",
        error: true,
        success: false,
      });
    }

    const isPasswordMatch = await bcryptjs.compare(password, user.password);
    if (!isPasswordMatch) {
      return response.status(400).json({
        message: "Invalid email or password",
        error: true,
        success: false,
      });
    }

    const accesstoken = await generateAccesstoken(user._id);
    const refreshtoken = await generateRefreshtoken(user._id);

    const cookieOptions = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    response.cookie("accesstoken", accesstoken, cookieOptions);
    response.cookie("refreshtoken", refreshtoken, cookieOptions);

    const { password: _, ...userWithoutPassword } = user._doc;

    return response.json({
      message: "Login successfully",
      error: false,
      success: true,
      token: accesstoken, // ✅ matches frontend expectation
      user: userWithoutPassword,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}


export async function logoutController(request, response) {
  try {
    const userid = request.userId; //middleware

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    response.clearCookie("accessToken", cookiesOption);
    response.clearCookie("refreshToken", cookiesOption);

    const removeRefreshToken = await UserModel.findByIdAndUpdate(userid, {
      refresh_token: "",
    });

    return response.json({
      message: "Logout successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}
