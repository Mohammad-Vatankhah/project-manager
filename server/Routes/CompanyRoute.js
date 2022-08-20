import express from "express";
import {
  createCompany,
  getCompany,
  updateCompany,
} from "../Controllers/CompanyController.js";

const router = express.Router();

router.post("/createCompany", createCompany);
router.get("/:id/getCompany", getCompany);
router.put("/:id/updateCompany", updateCompany);
export default router;
