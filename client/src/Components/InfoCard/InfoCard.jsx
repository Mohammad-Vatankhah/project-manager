import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
export const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <UilPen
          width="2rem"
          height="1.2rem"
          onClick={() => setModalOpened(true)}
        />
        <ProfileModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
        />
      </div>
      <div className="info">
        <span>
          <b>Status: </b>
        </span>
        <span>Learning</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in: </b>
        </span>
        <span>Ardakan</span>
      </div>
      <div className="info">
        <span>
          <b>Company: </b>
        </span>
        <span>No where</span>
      </div>
      <div className="info">
        <span>
          <b>E-mail: </b>
        </span>
        <span>example@example.com</span>
      </div>
      <button className="button" id="logout-button">
        Log Out
      </button>
    </div>
  );
};
