import express from "express";
import { Client } from "pg";
import dotenv from "dotenv";
import { signUp,Signin } from "./handler";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const pgclient = new Client({
  user: "neondb_owner",
  password: process.env.NEON_PASSWORD,
  host: process.env.NEON_HOST,
  port: process.env.NEON_PORT ? parseInt(process.env.NEON_PORT, 10) : 5432,
  database: "neondb",
  ssl: true,
});

app.post("/signup", signUp);
app.post("/signin",Signin);

const main = async () => {
  await pgclient.connect();
  console.log("Connected to PostgreSQL");

  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
};

main();
