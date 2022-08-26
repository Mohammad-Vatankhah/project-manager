import React from "react";
import "./CompaniesCard.css";
import * as CompanyApi from "../../api/CompanyRequests";
import { useState } from "react";
import { CompanyModal } from "../CompanyModal/CompanyModal";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export const CompaniesCard = () => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const params = useParams();
  const profileUserId = params.id;
  const user = useSelector((state) => state.authReducer.authData.user);
  const [modalOpened, setModalOpened] = useState(false);
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const fetchCompanies = async () => {
      const data = await CompanyApi.getUserCompanies(profileUserId);
      setCompanies(data.data);
    };
    fetchCompanies();
  }, [profileUserId]);
  return (
    <div className="CompaniesCard">
      <h3>Companies</h3>
      {companies.length > 0 ? companies.map((company) => {
        return (
          <div className="company" key={company._id }>
            <div>
              <img
                src={
                  company.profilePicture
                    ? serverPublic + user.profilePicture
                    : serverPublic + "defaultCompanyProfile.png"
                }
                alt=""
                className="companyImg"
              />
              <div className="name">
                <span>{company.name}</span>
                <span>{company.address}</span>
              </div>
            </div>
            <button className="button" id="view-button">
              View
            </button>
          </div>
        );
      }) : <span>No companies available</span>}
      {user._id === profileUserId && (
        <button
          onClick={() => setModalOpened(true)}
          style={{ width: "100%", height: "2rem" }}
          className="button"
        >
          Create New Company
        </button>
      )}

      <CompanyModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};
