import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

// registering a new user
export const registerUser = async (req, res) => {
  const { firstName, lastName, username, Email, password } = req.body;
  // securing password
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const newUSer = UserModel({
    firstName,
    lastName,
    username,
    Email,
    password: hashedPass,
  });

  try {
    await newUSer.save();
    res.status(200).json(newUSer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login user

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username: username });

    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      validity
        ? res.status(200).json(user)
        : res.status(400).json("Wrong Password");
    } else {
      res.status(404).json("User does not exists");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
