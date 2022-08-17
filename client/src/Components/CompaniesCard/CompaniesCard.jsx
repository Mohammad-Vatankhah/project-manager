import React from "react";
import "./CompaniesCard.css";
import { Companies } from "../../Data/CompaniesData";
export const CompaniesCard = () => {
  return (
    <div className="CompaniesCard">
      <h3>Your Companies</h3>
      {Companies.map((company) => {
return (
          <div className="company">
            <div>
              <img src={company.img} alt="" className="companyImg" />
              <div className="name">
                <span>{company.name}</span>
                <span>{company.location}</span>
              </div>
            </div>
            <button className="button" id="view-button">View</button>
          </div>
        );
      })}
      <button style={{ width: "100%", height: "2rem" }} className="button">
        Create New Company
      </button>
    </div>
  );
};
