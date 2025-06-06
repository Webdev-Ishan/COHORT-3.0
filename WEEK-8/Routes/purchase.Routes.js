import express from "express";
import { authUsers } from "../Middleware/auth.middleware.js";
import * as purchaseController from "../Controller/purchase.Controller.js";
const purchaseRouter = express.Router();

purchaseRouter.post("/buy/:id", authUsers, purchaseController.purchaseController);
purchaseRouter.get("/allbuys", authUsers, purchaseController.allpurchaseController);


export default purchaseRouter;