import express from "express";
import cookieParser from "cookie-parser";
import connectTodb from "./Config/DB.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;
connectTodb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(port || 3000, () => {
  console.log("Server is running");
});
