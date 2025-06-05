import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
  {
    paymentAmount: {
      type: String,
      required: true,
    },
    Sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },

    Reciever: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  {
    timestamps: true,
  }
);

const purchaseModel = mongoose.model("Purchase", purchaseSchema);
export default purchaseModel;
