import { Application, Request, RequestHandler, Response } from "express";
import { pgclient } from "./app";

export const signUp:RequestHandler = async (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
        res.status(403).json({
      success: false,
      message: "Input Not found",
    });
  }

  try {
    const response = await pgclient.query(
      `INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *`,
      [username, email]
    );

     res.status(200).json({
      success: true,
      user: response.rows[0],
      message: "Signup successful",
    });
  } catch (error) {
    console.error("Signup Error:", error);
     res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
