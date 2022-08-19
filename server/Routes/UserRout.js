import express from "express";
import { deleteUser, followUser, getUser, updateUser } from "../Controllers/UserController.js";

const router = express.Router();
router.get("/:id", getUser);
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.put("/:id/follow", followUser)
export default router;
