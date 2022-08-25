import express from "express";
import {
  deleteUser,
  followUser,
  getAllUsers,
  getUser,
  unfollowUser,
  updateUser,
} from "../Controllers/UserController.js";

const router = express.Router();
router.get("/:id/get", getUser);
router.put("/:id/update", updateUser);
router.delete("/:id/delete", deleteUser);
router.put("/:id/follow", followUser);
router.put("/:id/unfollow", unfollowUser);
router.get("/allUsers", getAllUsers);
export default router;
