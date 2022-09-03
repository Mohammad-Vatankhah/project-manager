import React from "react";
import { CompanyInfoCard } from "../CompanyInfoCard/CompanyInfoCard";
import { EmployeesCard } from "../EmployeesCard/EmployeesCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import "./CompanyPageLeft.css";

export const CompanyPageLeft = ({ company }) => {
  return (
    <div className="CompanyPageLeft">
      <LogoSearch />
      <CompanyInfoCard company={company} />
      <EmployeesCard company={company} />
    </div>
  );
};
