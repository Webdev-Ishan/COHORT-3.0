import express from "express";
import { authUsers } from "../Middleware/auth.middleware.js";
import * as userController from "../Controller/user.Controller.js";
const userRouter = express.Router();

userRouter.post("/signup", userController.signupController);
userRouter.post("/login", userController.loginController);
userRouter.get("/profile", authUsers, userController.profileController);
userRouter.post("/logout", authUsers, userController.logoutController);
export default userRouter;
