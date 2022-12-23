import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }

  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB is connected...");
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;
