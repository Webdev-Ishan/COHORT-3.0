import { Application, Request, RequestHandler, Response } from "express";
import { pgclient } from "./app";

export const signUp: RequestHandler = async (req, res) => {
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

export const Signin: RequestHandler = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(403).json({
      success: false,
      message: "Enter email please",
    });
  }

  try {
    await pgclient.query("BEGIN;");

    let response = await pgclient.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );

    // res.json({
    //   message:"Unable to login becuase of transcation laws"
    // })
    // process.exit(1);

    await pgclient.query(`UPDATE users SET email = $1 WHERE email = $2`, [
      "srishti@gmail.com",
      response.rows[0].email,
    ]);

    await pgclient.query("COMMIT;");

    if (!response) {
      res.status(403).json({
        succes: false,
        message: "SOmething went wrong",
      });
    }

    res.status(200).json({
      success: true,
      user: response.rows[0],
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
};
