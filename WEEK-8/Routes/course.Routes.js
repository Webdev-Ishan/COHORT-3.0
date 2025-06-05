import express from "express";
import { authUsers } from "../Middleware/auth.middleware.js";
import * as courseController from "../Controller/Course.controller.js";
const courseRouter = express.Router();

courseRouter.post("/create", authUsers, courseController.createController);

export default courseRouter;
