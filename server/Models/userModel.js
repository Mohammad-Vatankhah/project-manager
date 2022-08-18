import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: String,
    livesIn: String,
    company: String,
    profilePicture: String,
    coverPicture: String,
    isAdmin: {
      type: Boolean,
      default: false,
    },
    followers: [],
    followings: [],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
