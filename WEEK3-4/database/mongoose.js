const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`connected to mongodb at ${process.env.PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });

// Define schemas

const UserSchema = new mongoose.Schema({
  // Schema definition here
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});

const TodoSchema = new mongoose.Schema({
  // Schema definition here
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
  },

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", UserSchema);
const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
  User,
  Todo,
};
