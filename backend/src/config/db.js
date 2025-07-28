import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB is Connected");
  } catch (error) {
    console.error("Error connecting MongoDB", error);
    process.exit(1); //exit with failure
  }
};
