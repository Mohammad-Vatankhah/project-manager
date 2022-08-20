import express from "express";
import { createCompany } from "../Controllers/CompanyController.js";

const router = express.Router();

router.post("/createCompany", createCompany);
export default router;
