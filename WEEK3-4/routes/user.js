const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user.js");
const { User } = require("../database/mongoose.js");
const { Todo } = require("../database/mongoose.js");
const jwt = require("jsonwebtoken");
const { z } = require("zod");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic

  const parsedbody = z
    .object({
      name: z.string().min(3).max(35),
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
  const parsedwithSuccess = parsedbody.safeParse(req.body);
  if (!parsedwithSuccess.success) {
    return res.json({ success: false, error: parsedwithSuccess.error });
  }

  const { name, email, password } = parsedwithSuccess.data;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Fill info of user" });
  }

  try {
    let exist = await User.findOne({ email: email });
    if (exist) {
      return res
        .status(400)
        .json({ success: false, message: "Already exists" });
    }

    let user = new User({
      name,
      email,
      password,
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
    return res.status(400).json({ success: false, message: error.message });
  }
});

router.post("/login", async (req, res) => {
  // Implement user login logic
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Fill info of user" });
  }

  try {
    let user = await User.findOne({
      email: email,
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Sign up please" });
    }

    if (user.password !== password) {
      return res
        .status(400)
        .json({ success: false, message: "Email or password is wrong." });
    }

    let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
      sameSite: "none", // Required for cross-origin cookies
    });

    return res.status(400).json({ success: true, user });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

router.get("/todos", userMiddleware, async (req, res) => {
  // Implement logic for getting todos for a user
  const id = req.owner;
  if (!id) {
    return res.status(400).json({ Success: false, message: "ID not found" });
  }
  try {
    let todos = await Todo.find({ creator: id });
    if (!todos) {
      return res
        .status(400)
        .json({ Success: false, message: "Somethign went wrong" });
    }

    return res.status(400).json({ Success: true, todos });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

router.post("/logout", userMiddleware, (req, res) => {
  // Implement logout logic
  try {
    res.cookie("token", "", {
      httpOnly: true,
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
      sameSite: "none", // Required for cross-origin cookies
    });
    return res.status(200).json({ success: true, message: "Logout" });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;
