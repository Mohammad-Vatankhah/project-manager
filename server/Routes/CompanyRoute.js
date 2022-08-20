import express from "express";
import {
  createCompany,
  deleteCompany,
  getCompany,
  updateCompany,
} from "../Controllers/CompanyController.js";

const router = express.Router();

router.post("/createCompany", createCompany);
router.get("/:id/getCompany", getCompany);
router.put("/:id/updateCompany", updateCompany);
router.delete("/:id/deleteCompany", deleteCompany);
export default router;
