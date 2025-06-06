import express from "express";
import { authAdmins } from "../Middleware/authAdmin.middleware.js";
import * as courseController from "../Controller/Course.controller.js";
const courseRouter = express.Router();

courseRouter.post("/create", authAdmins, courseController.createController);
courseRouter.delete("/delete/:id", authAdmins, courseController.deleteController);
courseRouter.get("/all", courseController.getAllController);


export default courseRouter;
