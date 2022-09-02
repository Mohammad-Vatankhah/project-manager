import mongoose from "mongoose";

const CompanySchema = mongoose.Schema(
  {
    owner: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    companyId: {
      type: String,
      required: true,
      unique: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePicture: String,
    coverPicture: String,
    employees: [String],
    projects: [String]
  },
  { timestamps: true }
);

const CompanyModel = mongoose.model("companies", CompanySchema);
export default CompanyModel;
