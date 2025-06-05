import adminModel from "../Models/admin.Model.js";
import userModel from "../Models/user.Model.js";
import courseModel from "../Models/courses.Model.js";

import { z } from "zod";

export const createController = async (req, res) => {
  if (!req.userid) {
    return res.json({ success: false, message: "userid is required.." });
  }

  const parsedBody = z
    .object({
      Title: z.string().min(5).max(50),
      description: z.string().min(50).max(1000),
    })
    .strict();

  const parsedbodySuccess = parsedBody.safeParse(req.body);

  if (!parsedbodySuccess.success) {
    return res.json({
      success: false,
      message: parsedbodySuccess.error.message,
    });
  }

  const { Title, description } = req.body;

  if (!Title || !description) {
    return res.json({
      success: false,
      message: "All credentials is required..",
    });
  }

  try {
    let exist = await adminModel.findById(req.userid);

    if (!exist) {
      return res.json({ success: false, message: "Admin does not exist." });
    }

    let course = new courseModel({
      Title,
      description,
      creator: exist._id,
    });
    await course.save();

    if (!course) {
      return res.json({ success: false, message: "Something went wrong.." });
    }

    await adminModel.findByIdAndUpdate(exist._id, {
      $push: { coursesMade: course._id },
    });

    return res.json({ success: true, course });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};


