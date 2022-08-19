import express from "express";
import {
  addProcess,
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
router.put("/:id/addProcess", addProcess);
export default router;
