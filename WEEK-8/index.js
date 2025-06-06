import express from "express";
import cookieParser from "cookie-parser";
import connectTodb from "./Config/DB.js";
import userRoutes from "./Routes/user.Routes.js";
import adminRoutes from "./Routes/admin.Routes.js";
import courseRoutes from "./Routes/course.Routes.js";
import purchaseRoutes from "./Routes/purchase.Routes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/purchase", purchaseRoutes);

(async () => {
  try {
    await connectTodb();
    app.listen(port, () => {
      console.log("Server is running");
    });
  } catch (error) {
    console.error("Failed to connect to DB. Server not started.", error);
    process.exit(1);
  }
})();
