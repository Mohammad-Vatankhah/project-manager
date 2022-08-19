import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
// get user from database

export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);

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
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      if (password) {
        // securing password
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }

      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
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
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;
  if (currentUserId === id || currentUserAdminStatus) {
    try {
      const {followings, followers} = await UserModel.findById(id, {followings: 1, followers: 1})

      // delete from followings and followers
      followings.map(async (following) => {
        const temp = await UserModel.findById(following);
        await temp.updateOne({$pull: {followers: id}})
      })
      followers.map(async (follower) => {
        const temp = await UserModel.findById(follower);
        await temp.updateOne({$pull: {followings: id}})
      })
      await UserModel.findByIdAndDelete(id);
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
  const id = req.params.id;
  const { currentUserId } = req.body;

  // if someone wants to follow him/herself
  if (currentUserId === id) {
    res.status(403).json("Action forbidden!");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);

      if (!followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $push: { followers: currentUserId } });
        await followingUser.updateOne({ $push: { followings: id } });
        res.status(200).json("User followed!")
      } else {
        res.status(403).json("User is already followed by you.")
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

// unfollow user 
export const unfollowUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;

  // if someone wants to unfollow him/herself
  if (currentUserId === id) {
    res.status(403).json("Action forbidden!");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);

      if (followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $pull: { followers: currentUserId } });
        await followingUser.updateOne({ $pull: { followings: id } });
        res.status(200).json("User unfollowed!")
      } else {
        res.status(403).json("User is not followed by you.")
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};