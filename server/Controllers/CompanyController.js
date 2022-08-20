import CompanyModel from "../Models/CompanyModel.js";
import UserModel from "../Models/userModel.js";

// create company
export const createCompany = async (req, res) => {
  const company = new CompanyModel(req.body);
  try {
    await company.save();
    const owner = await UserModel.findById(req.body.owner);
    await owner.updateOne({ $push: { companies: company.id } });
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

// update company
export const updateCompany = async (req, res) => {
  const id = req.params.id;
  const {
    currentUserId,
    owner,
    name,
    companyId,
    contactNumber,
    address,
    Email,
    profilePicture,
    coverPicture,
  } = req.body;
  try {
    const user = await UserModel.findById(currentUserId);
    if (user.companies.includes(id)) {
      const company = await CompanyModel.findByIdAndUpdate(
        id,
        {
          owner,
          name,
          companyId,
          contactNumber,
          address,
          Email,
          profilePicture,
          coverPicture,
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
