import React, { useState } from "react";
import "../InfoCard/InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import { CompanyModal } from "../CompanyModal/CompanyModal";


export const CompanyInfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div style={{marginTop: "15px"}} className="CompanyInfoCard InfoCard">
      <div className="infoHead">
        <h4>Company Info</h4>
        <UilPen
          width="2rem"
          height="1.2rem"
          onClick={() => setModalOpened(true)}
        />
        <CompanyModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
      </div>
      <div className="info">
        <span>
          <b>Address: </b>
        </span>
        <span>inja</span>
      </div>
      <div className="info">
        <span>
          <b>Contact Number: </b>
        </span>
        <span>123456789</span>
      </div>
      <div className="info">
        <span>
          <b>Company ID: </b>
        </span>
        <span>No where</span>
      </div>
      <div className="info">
        <span>
          <b>E-mail: </b>
        </span>
        <span>example@example.com</span>
      </div>
    </div>
  );
};
