import express from "express";
import { authUsers } from "../Middleware/auth.middleware.js";
import * as adminController from "../Controller/admin.Controller.js";
const adminRouter = express.Router();

adminRouter.post("/signup", adminController.signupController);
adminRouter.post("/login", adminController.loginController);
adminRouter.get("/profile", authUsers, adminController.profileController);
adminRouter.post("/logout", authUsers, adminController.logoutController);
adminRouter.get("/allcourses", authUsers, adminController.allcoursesController);
adminRouter.get(
  "/allstudents",
  authUsers,
  adminController.allstudentsController
);
adminRouter.put("/update/:id", authUsers, adminController.updateCourseController);
adminRouter.put("/updateInfo",authUsers,adminController.updateInfoController);
export default adminRouter;
