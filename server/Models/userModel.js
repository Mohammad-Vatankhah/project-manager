import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username required!"],
      // unique: [true, "Username already taken"],
    },
    firstName: {
      type: String,
      required: [true, "First name required!"],
    },
    lastName: {
      type: String,
      required: [true, "last name required!"],
    },
    Email: {
      type: String,
      required: true,
      // unique: [true, "There is already an account with this Email"],
    },
    password: {
      type: String,
      required: [true, "Password required!"],
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
    followers: [String],
    followings: [String],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
