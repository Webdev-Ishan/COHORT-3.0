import express from "express";
import { authUsers } from "../Middleware/auth.middleware.js";
import * as courseController from "../Controller/Course.controller.js";
const courseRouter = express.Router();

courseRouter.post("/create", authUsers, courseController.createController);
courseRouter.delete("/delete/:id", authUsers, courseController.deleteController);
courseRouter.get("/all", courseController.getAllController);


export default courseRouter;
