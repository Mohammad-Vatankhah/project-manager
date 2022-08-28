import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getCompanyByUsername } from "../../api/CompanyRequests";
import "./Company.css";
export const Company = ({ company }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const [companyData, setCompanyData] = useState({});
  useEffect(() => {
    const fetchCompany = async () => {
      const { data } = await getCompanyByUsername(company);
      setCompanyData(data);
    };
    fetchCompany();
  }, []);
  return (
    <div className="Company">
      <div>
        <img
          src={
            companyData.profilePicture
              ? serverPublic + companyData.profilePicture
              : serverPublic + "defaultCompanyProfile.png"
          }
          alt=""
          className="companyImg"
        />
        <div className="name">
          <span>{companyData.name}</span>
          <span>{companyData.address}</span>
        </div>
      </div>
      <button className="button" id="view-button">
        View
      </button>
    </div>
  );
};
