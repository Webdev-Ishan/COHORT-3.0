const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const router = Router();
const { Todo } = require("../database/mongoose.js");
const { User } = require("../database/mongoose.js");

// todo Routes
router.post("/:id", async (req, res) => {
  // Implement todo creation logic
  const { id } = req.params;
  const { title, content, deadline } = req.body;
  if (!title || !content || !id) {
    return res.json({
      success: false,
      status: 400,
      message: "FIll all credentials",
    });
  }
  try {
    let todo = new Todo({
      title,
      content,
      deadline,
      creator: id,
    });

    await todo.save();

    await User.findByIdAndUpdate(
      id,
      { $push: { todos: todo._id } },
      { new: true }
    );

    return res.json({ success: true, todo });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

router.put("/", adminMiddleware, (req, res) => {
  // Implement update todo  logic
});

router.delete("/", adminMiddleware, (req, res) => {
  // Implement delete todo logic
});

router.delete("/:id", adminMiddleware, (req, res) => {
  // Implement delete todo by id logic
});

router.get("/", adminMiddleware, (req, res) => {
  // Implement fetching all todo logic
});

router.get("/:id", adminMiddleware, (req, res) => {
  // Implement fetching todo by id logic
});

module.exports = router;
