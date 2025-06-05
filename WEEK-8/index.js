import express from "express";
import cookieParser from "cookie-parser";
import connectTodb from "./Config/DB.js";
import userRoutes from "./Routes/user.Routes.js";
import adminRoutes from "./Routes/admin.Routes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;
connectTodb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

app.listen(port || 3000, () => {
  console.log("Server is running");
});
