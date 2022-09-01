import React, { useEffect, useState } from "react";
import { CompanyPageLeft } from "../../Components/CompanyPageLeft/CompanyPageLeft";
import PostSide from "../../Components/PostSide/PostSide";
import RightSide from "../../Components/RightSide/RightSide";
import { CompanyDetails } from "../../Components/CompanyDetails/CompanyDetails";
import "./CompanyPage.css";
import { getCompanyById } from "../../api/CompanyRequests";
import { useParams } from "react-router-dom";
export const CompanyPage = () => {
  const [companyData, setCompanyData] = useState();
  const params = useParams();
  useEffect(() => {
    getCompanyById(params.id).then((res) => {
      console.log(res.data);
      setCompanyData(res.data);
    });
  }, [params.id]);
  return (
    <div className="CompanyPage">
      <CompanyPageLeft company={companyData}/>
      <div className="companyPageCenter">
        <CompanyDetails
          company={companyData}
        />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};
