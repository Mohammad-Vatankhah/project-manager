import React from "react";
import "./CompaniesCard.css";
import { Companies } from "../../Data/CompaniesData";
import { useState } from "react";
import { CompanyModal } from "../CompanyModal/CompanyModal";
export const CompaniesCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
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
            <button className="button" id="view-button">
              View
            </button>
          </div>
        );
      })}
      <button onClick={() => setModalOpened(true)} style={{ width: "100%", height: "2rem" }} className="button">
        Create New Company
      </button>
      <CompanyModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};
