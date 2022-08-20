import express from "express";
import { createCompany, getCompany } from "../Controllers/CompanyController.js";

const router = express.Router();

router.post("/createCompany", createCompany);
router.get("/:id/getCompany", getCompany);
export default router;
