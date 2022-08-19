import express from "express";
import {
  createProject,
  deleteProject,
  getProject,
  likeProject,
  updateProject,
} from "../Controllers/ProjectController.js";

const router = express.Router();

router.post("/createProject", createProject);
router.get("/:id/getProject", getProject);
router.put("/:id/updateProject", updateProject);
router.delete("/:id/deleteProject", deleteProject);
router.put("/:id/likeProject", likeProject);
export default router;
