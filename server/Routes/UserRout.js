import express from "express";
import { deleteUser, followUser, getUser, unfollowUser, updateUser } from "../Controllers/UserController.js";

const router = express.Router();
router.get("/:id/get", getUser);
router.put("/:id/update", updateUser)
router.delete("/:id/delete", deleteUser)
router.put("/:id/follow", followUser)
router.put("/:id/unfollow", unfollowUser)
export default router;
