import mongoose from "mongoose";

const connectTodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Some error occurred : ", error.message);
    throw error;
  }
};

export default connectTodb;
