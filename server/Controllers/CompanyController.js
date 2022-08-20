import CompanyModel from "../Models/CompanyModel.js";

// create company
export const createCompany = async (req, res) => {
  const company = new CompanyModel(req.body);
  try {
    await company.save();
    res.status(200).json("Company created!")
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
