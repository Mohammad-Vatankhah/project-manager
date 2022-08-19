import express from "express";
import {
  addProcess,
  createProject,
  deleteProcess,
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
router.delete("/:id/deleteProcess", deleteProcess);
export default router;
