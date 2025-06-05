import purchaseModel from "../Models/purchase.Model.js";
import adminModel from "../Models/admin.Model.js";
import courseModel from "../Models/courses.Model.js";
import userModel from "../Models/user.Model.js";

import { z } from "zod";

export const purchaseController = async (req, res) => {
  const parsedBody = z.object({
    paymentAmount: z.string(),
  });
  const parsedbodySuccess = parsedBody.safeParse(req.body);
  if (!parsedbodySuccess.success) {
    return res.json({
      success: false,
      message: parsedbodySuccess.error.message,
    });
  }
  const { id } = req.params;
  const { paymentAmount } = req.body;

  if (!id || !req.userid || !paymentAmount) {
    return res.json({ success: false, message: "Ids are not found." });
  }

  try {
    let exist = await userModel.findById(req.userid);

    if (!exist) {
      return res.json({ success: false, message: "User does not exist." });
    }

    let course = await courseModel.findById(id);

    if (!course) {
      return res.json({ success: false, message: "Course do not exist." });
    }

    let admin = await adminModel.findById(course.creator);
    if (!admin) {
      return res.json({ success: false, message: "Admin do not exist." });
    }

    let purchase = new purchaseModel({
      paymentAmount,
      Sender: req.userid,
      Reciever: admin._id,
      courseId: course._id,
    });

    await purchase.save();

    await userModel.findByIdAndUpdate(req.userid, {
      $push: { coursesEnrolled: course._id },
    });

    return res.json({ success: true, message: "Payment is done" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
