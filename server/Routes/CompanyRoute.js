import express from "express";
import {
  addEmployee,
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
router.put("/:id/addEmployee", addEmployee);
export default router;
