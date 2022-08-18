import React from "react";
import { CompanyPageLeft } from "../../Components/CompanyPageLeft/CompanyPageLeft";
import PostSide from "../../Components/PostSide/PostSide";
import RightSide from "../../Components/RightSide/RightSide";
import { CompanyDetails } from "../../Components/CompanyDetails/CompanyDetails";

import "./CompanyPage.css";
export const CompanyPage = () => {
  return (
    <div className="CompanyPage">
      <CompanyPageLeft />
      <div className="companyPageCenter">
        <CompanyDetails />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};
