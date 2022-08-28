import express from "express";
import authMidleWare from "../middleWare/authMidleWare.js";
import {
  deleteUser,
  followUser,
  getAllUsers,
  getUser,
  getUserByUsername,
  unfollowUser,
  updateUser,
} from "../Controllers/UserController.js";

const router = express.Router();
router.get("/:id/get", getUser);
router.put("/:id/update", authMidleWare, updateUser);
router.delete("/:id/delete", authMidleWare, deleteUser);
router.put("/:id/follow", authMidleWare, followUser);
router.put("/:id/unfollow", authMidleWare, unfollowUser);
router.get("/allUsers", getAllUsers);
router.get("/:username/getByUsername", getUserByUsername);
export default router;
