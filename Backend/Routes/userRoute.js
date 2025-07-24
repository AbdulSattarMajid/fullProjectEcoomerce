import express from "express";
import { registerUserController, verifyEmailController } from "../controller/userController.js";
import { loginUserController } from "../controller/userController.js";  
import { logoutController } from "../controller/userController.js";


const userRoute = express.Router();

userRoute.post("/register", registerUserController);
userRoute.post("/verify-email", verifyEmailController);
userRoute.post("/login", loginUserController);
userRoute.post("/logout", logoutController);

export default userRoute;
