import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"],
  },
  profilePic: {
    type: String,
    default: "",
  },
  // createdAt, updatedAt => Member since <createdAt>
},
{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
