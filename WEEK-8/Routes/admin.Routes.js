import express from "express";
import { authAdmins } from "../Middleware/authAdmin.middleware.js";
import * as adminController from "../Controller/admin.Controller.js";
const adminRouter = express.Router();

adminRouter.post("/signup", adminController.signupController);
adminRouter.post("/login", adminController.loginController);
adminRouter.get("/profile", authAdmins, adminController.profileController);
adminRouter.post("/logout", authAdmins, adminController.logoutController);
adminRouter.get("/allcourses", authAdmins, adminController.allcoursesController);
adminRouter.get(
  "/allstudents",
  authAdmins,
  adminController.allstudentsController
);
adminRouter.put("/update/:id", authAdmins, adminController.updateCourseController);
adminRouter.put("/updateInfo",authAdmins,adminController.updateInfoController);
export default adminRouter;
