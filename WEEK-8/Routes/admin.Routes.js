import express from "express";
import { authUsers } from "../Middleware/auth.middleware.js";
import * as adminController from "../Controller/admin.Controller.js";
const adminRouter = express.Router();

adminRouter.post("/signup", adminController.signupController);
adminRouter.post("/login", adminController.loginController);
adminRouter.get("/profile", authUsers, adminController.profileController);
adminRouter.post("/logout", authUsers, adminController.logoutController);
export default adminRouter;
