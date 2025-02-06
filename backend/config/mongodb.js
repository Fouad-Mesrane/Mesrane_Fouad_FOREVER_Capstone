import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log("Db Not Connected", error);
  }
};

export default connectDB;
