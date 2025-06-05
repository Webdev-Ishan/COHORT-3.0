import adminModel from "../Models/admin.Model.js";
import bcrypt from "bcrypt";
import { z } from "zod";
import jwt from "jsonwebtoken";

export const signupController = async (req, res) => {
  const parsedbody = z
    .object({
      name: z.string().min(3).max(35),
      email: z.string().max(100).email(),
      password: z.string().min(8).max(30),
    })
    .strict();

  const parsedbodySuccess = parsedbody.safeParse(req.body);

  if (!parsedbodySuccess.success) {
    return res.json({
      success: false,
      message: parsedbodySuccess.error.message,
    });
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ success: false, message: "Fill all credentials please" });
  }

  try {
    let exist = await adminModel.findOne({ email: email });

    if (exist) {
      return res.json({ success: false, message: "Admin already exist." });
    }

    let salt = await bcrypt.genSalt(10);
    let hashed = await bcrypt.hash(password, salt);

    let user = new adminModel({
      name,
      email,
      password: hashed,
    });
    await user.save();

    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
      sameSite: "none", // Required for cross-origin cookies
    });

    return res.status(200).json({ success: true, message: "User created" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const loginController = async (req, res) => {
  const parsedbody = z
    .object({
      email: z.string().max(100).email(),
      password: z
        .string()
        .min(8)
        .max(30)
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/, {
          message: "Password must contain at least one letter and one number",
        }),
    })
    .strict();

  const parsedbodySuccess = parsedbody.safeParse(req.body);

  if (!parsedbodySuccess.success) {
    return res.json({
      success: false,
      message: parsedbodySuccess.error.message,
    });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false, message: "Fill all credentials please" });
  }

  try {
    let exist = await adminModel.findOne({ email: email });

    if (!exist) {
      return res.json({ success: false, message: "User does not exist." });
    }

    let compare = await bcrypt.compare(password, exist.password);

    if (exist.email != email || !compare) {
      return res.json({ success: false, message: "User does not exist." });
    }

    let token = jwt.sign({ id: exist._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
      sameSite: "none", // Required for cross-origin cookies
    });

    return res.status(200).json({ success: true, exist });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const profileController = async (req, res) => {
  if (!req.userid) {
    return res.json({ success: false, message: "userid is required.." });
  }

  try {
    let exist = await adminModel.findById(req.userid);

    if (!exist) {
      return res.json({ success: false, message: "User does not exist." });
    }

    return res.status(200).json({ success: true, exist });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const logoutController = async (req, res) => {
  if (!req.userid) {
    return res.json({ success: false, message: "userid is required.." });
  }

  try {
    res.cookie("token", "", {
      httpOnly: true,
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
      sameSite: "none", // Required for cross-origin cookies
    });

    return res
      .status(200)
      .json({ success: true, message: "Logout successfull!!!" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
