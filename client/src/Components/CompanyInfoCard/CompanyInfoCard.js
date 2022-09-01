import React, { useState } from "react";
import "../InfoCard/InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import { CompanyModal } from "../CompanyModal/CompanyModal";

export const CompanyInfoCard = ({ company }) => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div style={{ marginTop: "15px" }} className="CompanyInfoCard InfoCard">
      <div className="infoHead">
        <h4>Company Info</h4>
        <UilPen
          width="2rem"
          height="1.2rem"
          onClick={() => setModalOpened(true)}
        />
        <CompanyModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
        />
      </div>
      <div className="info">
        <span>
          <b>Address: </b>
        </span>
        <span>{company?.address}</span>
      </div>
      <div className="info">
        <span>
          <b>Contact Number: </b>
        </span>
        <span>{company?.contactNumber}</span>
      </div>
      <div className="info">
        <span>
          <b>Company ID: </b>
        </span>
        <span>{company?.companyId}</span>
      </div>
      <div className="info">
        <span>
          <b>E-mail: </b>
        </span>
        <span>{company?.Email}</span>
      </div>
    </div>
  );
};
