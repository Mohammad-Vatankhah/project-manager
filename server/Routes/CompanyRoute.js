import express from "express";
import {
  addEmployee,
  createCompany,
  deleteCompany,
  getCompany,
  getCompanyById,
  getUserCompanies,
  removeEmployee,
  updateCompany,
} from "../Controllers/CompanyController.js";

const router = express.Router();

router.post("/createCompany", createCompany);
router.get("/:id/getCompany", getCompany);
router.put("/:id/updateCompany", updateCompany);
router.delete("/:id/deleteCompany", deleteCompany);
router.put("/:id/addEmployee", addEmployee);
router.put("/:id/removeEmployee", removeEmployee);
router.get("/:id/getUserCompanies", getUserCompanies);
router.get("/:username/getCompanyByUsername", getCompanyById);
export default router;
