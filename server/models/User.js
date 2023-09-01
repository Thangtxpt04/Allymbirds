import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    birtday: {
      type: String,
      max: 50,
    },
    fullName: {
      type: String,
    },
    gender: String,
    address: String,
    phone: String,
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);
export default User;
