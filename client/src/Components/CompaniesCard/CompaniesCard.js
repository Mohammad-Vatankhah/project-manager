import React from "react";
import "./CompaniesCard.css";
import { useState } from "react";
import { CompanyModal } from "../CompanyModal/CompanyModal";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserCompanies } from "../../actions/CompanyActions";
import { Company } from "../Company/Company";
export const CompaniesCard = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  const user = useSelector((state) => state.authReducer.authData.user);
  const [modalOpened, setModalOpened] = useState(false);
  useEffect(() => {
    dispatch(getUserCompanies(profileUserId));
  }, [modalOpened, profileUserId]);
  const { companyData: companies, loading } = useSelector(
    (state) => state.companyReducer
  );
  return (
    <div className="CompaniesCard">
      <h3>Companies</h3>
      {companies.length > 0 ? (
        loading ? (
          "Fetching companies..."
        ) : (
          companies.map((company) => {
            return <Company company={company} key={company._id} location="profile"/>;
          })
        )
      ) : (
        <span>No companies available</span>
      )}
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
