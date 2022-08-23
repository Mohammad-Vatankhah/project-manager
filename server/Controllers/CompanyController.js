import CompanyModel from "../Models/CompanyModel.js";
import UserModel from "../Models/userModel.js";

// create company
export const createCompany = async (req, res) => {
  const company = new CompanyModel(req.body);
  try {
    await company.save();
    const owner = await UserModel.findById(req.body.owner);
    await owner.updateOne({ $push: { companies: company.companyId } });
    res.status(200).json("Company created!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get company from database
export const getCompany = async (req, res) => {
  const id = req.params.id;
  try {
    const company = await CompanyModel.findById(id);
    if (company) {
      res.status(200).json(company);
    } else {
      res.status(404).json("No such company exists!");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get all companies of a user
export const getUserCompanies = async (req, res) => {
  const id = req.params.id;
  try {
    const companies = await CompanyModel.find({ owner: id });
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update company
export const updateCompany = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, ...otherInfo } = req.body;
  try {
    const user = await UserModel.findById(currentUserId);
    if (user.companies.includes(id) || currentUserAdminStatus) {
      const company = await CompanyModel.findByIdAndUpdate(
        id,
        {
          ...otherInfo,
        },
        { new: true }
      );
      res.status(200).json(company);
    } else {
      res
        .status(403)
        .json("Access Denied! You can only edit your own companies!");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete company
export const deleteCompany = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;
  try {
    const company = await CompanyModel.findById(id);
    if (company.owner === currentUserId || currentUserAdminStatus) {
      const user = await UserModel.findById(currentUserId);
      await user.updateOne({ $pull: { companies: id } });
      await CompanyModel.findByIdAndDelete(id);
      res.status(200).json("Company deleted successfully!");
    } else {
      res
        .status(403)
        .json("Access Denied! you can only delete your own companies!");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add employee
export const addEmployee = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, employees } = req.body;
  try {
    const company = await CompanyModel.findById(id);
    if (company.owner === currentUserId) {
      await company.updateOne({ $addToSet: { employees: employees } });
      res.status(200).json("employee/employees added!");
    } else {
      res
        .status(403)
        .json(
          "Access Denied! you can only add employees to your own companies!"
        );
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// remove employee
export const removeEmployee = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, employees } = req.body;
  try {
    const company = await CompanyModel.findById(id);
    if (employees.includes(company.owner)) {
      res
        .status(403)
        .json("You can not remove yourself from your own company!");
    } else if (company.owner === currentUserId) {
      await company.updateOne({ $pullAll: { employees: employees } });
      res.status(200).json("Employees removed!");
    } else {
      res
        .status(403)
        .json("You can only remove employees from your own companies!");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
