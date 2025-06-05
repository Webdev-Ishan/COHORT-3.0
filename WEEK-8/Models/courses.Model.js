import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    studentEnrolled: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  {
    timestamps: true,
  }
);

const courseModel = mongoose.model("Course", courseSchema);
export default courseModel;
