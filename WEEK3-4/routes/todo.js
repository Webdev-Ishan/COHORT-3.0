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

router.put("/:id", adminMiddleware, async (req, res) => {
  // Implement update todo  logic
  const id = req.owner;
  const { title, content, deadline } = req.body;
  if (!title || !content || !id) {
    return res.json({
      success: false,
      status: 400,
      message: "FIll all credentials",
    });
  }

  try {
    let user = await User.findById(id);
    if (!user) {
      return res.json({
        success: false,
        message: "User do not exist for this todo",
      });
    }

    let todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.json({ success: false, message: "todo do not exist" });
    }

    if (todo.creator != id) {
      return res.json({
        success: false,
        message: "user do not valid for this todo",
      });
    }

    todo.title = title;
    todo.content = content;
    todo.deadline = deadline;
    await todo.save();

    return res.json({ success: true, todo });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

router.delete("/:id", adminMiddleware, async (req, res) => {
  // Implement delete todo logic
  const id = req.owner;

  if (!id || !req.params.id) {
    return res.json({
      success: false,
      message: "Id not found",
      statuscode: 400,
    });
  }
  try {
    let user = await User.findById(id);
    if (!user) {
      return res.json({
        success: false,
        message: "User do not exist for this todo",
      });
    }

    let todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.json({ success: false, message: "todo do not exist" });
    }

    if (todo.creator != id) {
      return res.json({
        success: false,
        message: "user do not valid for this todo",
      });
    }

    await Todo.findByIdAndDelete(req.params.id);
    return res.json({ success: true, status: 200, message: "Todo deleted" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

router.delete("/", adminMiddleware, async (req, res) => {
  // Implement delete todo logic
  const id = req.owner;
  try {
    let user = await User.findById(id);
    if (!user) {
      return res.json({
        success: false,
        message: "User do not exist for this todo",
      });
    }

    await Todo.findByIdAndDelete({ creator: user._id });

    return res.json({ success: true, message: "All todos delted" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

router.get("/", adminMiddleware, async (req, res) => {
  // Implement fetching all todo logic
  const id = req.owner;
  try {
    let user = await User.findById(id);
    if (!user) {
      return res.json({
        success: false,
        message: "User do not exist for this todo",
      });
    }

    let alltodos = await Todo.find({ creator: user._id });
    if (!alltodos) {
      return res.json({ success: false, message: "Somethign went wrong." });
    }

    return res.json({ success: true, alltodos });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

router.get("/:id", adminMiddleware, async (req, res) => {
  // Implement fetching todo by id logic
  const id = req.owner;
  if (!id || !req.params) {
    return res.json({
      success: false,
      message: "ID of user or todo is wrong.",
    });
  }
  try {
    let user = await User.findById(id);
    if (!user) {
      return res.json({
        success: false,
        message: "User do not exist for this todo",
      });
    }
    let todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.json({ success: false, message: "todo do not exist" });
    }

    if (todo.creator != id) {
      return res.json({
        success: false,
        message: "user do not valid for this todo",
      });
    }

    return res.json({ success: true, todo });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
});

module.exports = router;
