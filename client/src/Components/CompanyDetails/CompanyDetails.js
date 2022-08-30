import React from "react";
import "./CompanyDetails.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
export const CompanyDetails = () => {
  return (
    <div className="CompanyDetails">
      <div className="companyImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="companyName">
        <span>Company Name</span>
      </div>
      <div className="companyStatus">
        <hr />
        <div>
          <div className="status">
            <span>20312</span>
            <span>Employees</span>
          </div>
          <div className="status">
            <span>12345</span>
            <span>Projects</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
