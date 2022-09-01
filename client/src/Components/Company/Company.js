import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCompanyByUsername } from "../../api/CompanyRequests";
import "./Company.css";
export const Company = ({ company, location }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const [companyData, setCompanyData] = useState({});

  useEffect(() => {
    if (location === "profile") {
      setCompanyData(company);
    } else {
      const fetchCompany = async () => {
        const { data } = await getCompanyByUsername(company);
        setCompanyData(data);
      };
      fetchCompany();
    }
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
      <Link to={`/company/${company._id}`} style={{ textDecoration: "none" }}>
        <button className="button" id="view-button">
          View
        </button>
      </Link>
    </div>
  );
};
