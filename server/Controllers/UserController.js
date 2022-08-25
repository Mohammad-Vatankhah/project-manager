import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// get all users
export const getAllUsers = async (req, res) => {
  try {
    let users = await UserModel.find();
    users.map((user) => {
      const { password, ...other } = user._doc;
      return other;
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get user from database
export const getUser = async (req, res) => {
  const username = req.params.username;
  try {
    const user = await UserModel.findById(username);

    if (user) {
      // prevent getting password in get request
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such user exists");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a user

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { _id, currentUserAdminStatus, password } = req.body;
  if (id === _id || currentUserAdminStatus) {
    try {
      if (password) {
        // securing password
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }

      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      const token = jwt.sign(
        { username: user.username, id: user._id },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );
      res.status(200).json({ user, token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res
      .status(403)
      .json("Access Denied! you can only update your own profile.");
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const username = req.params.username;
  const { currentUserUsername, currentUserAdminStatus } = req.body;
  if (currentUserUsername === username || currentUserAdminStatus) {
    try {
      const { followings, followers } = await UserModel.findById(username, {
        followings: 1,
        followers: 1,
      });

      // delete from followings and followers
      followings.map(async (following) => {
        const temp = await UserModel.findById(following);
        await temp.updateOne({ $pull: { followers: username } });
      });
      followers.map(async (follower) => {
        const temp = await UserModel.findById(follower);
        await temp.updateOne({ $pull: { followings: username } });
      });
      await UserModel.findByIdAndDelete(username);
      res.status(200).json("User deleted successfully");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res
      .status(403)
      .json("Access Denied! you can only delete your own profile.");
  }
};

// Follow a User

export const followUser = async (req, res) => {
  const username = req.params.username;
  const { currentUserUsername } = req.body;

  // if someone wants to follow him/herself
  if (currentUserUsername === username) {
    res.status(403).json("Action forbidden!");
  } else {
    try {
      const followUser = await UserModel.findById(username);
      const followingUser = await UserModel.findById(currentUserUsername);

      if (!followUser.followers.includes(currentUserUsername)) {
        await followUser.updateOne({
          $push: { followers: followingUser.username },
        });
        await followingUser.updateOne({
          $push: { followings: followUser.username },
        });
        res.status(200).json("User followed!");
      } else {
        res.status(403).json("User is already followed by you.");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

// unfollow user
export const unfollowUser = async (req, res) => {
  const username = req.params.username;
  const { currentUserUsername } = req.body;

  // if someone wants to unfollow him/herself
  if (currentUserUsername === username) {
    res.status(403).json("Action forbidden!");
  } else {
    try {
      const followUser = await UserModel.findById(username);
      const followingUser = await UserModel.findById(currentUserUsername);

      if (followUser.followers.includes(currentUserUsername)) {
        await followUser.updateOne({
          $pull: { followers: currentUserUsername },
        });
        await followingUser.updateOne({ $pull: { followings: username } });
        res.status(200).json("User unfollowed!");
      } else {
        res.status(403).json("User is not followed by you.");
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
