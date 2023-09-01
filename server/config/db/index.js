import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/Allybirds");
    console.log("Connect to MongoDB Successfully");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};

export { connect };
