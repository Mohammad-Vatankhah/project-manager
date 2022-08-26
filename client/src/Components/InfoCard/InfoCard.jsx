import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../actions/AuthActions";
export const InfoCard = ({ user }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();

  const user1 = useSelector((state) => state.authReducer.authData.user);
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className="InfoCard">
      <div className="infoHead">
        {user._id === user1._id ? (
          <>
            <h4>Your Info</h4>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
          </>
        ) : (
          <h4>{user.firstName + "'s info"}</h4>
        )}

        <ProfileModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
          data={user}
        />
      </div>
      <div className="info">
        <span>
          <b>Status: </b>
        </span>
        <span>{user.status}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in: </b>
        </span>
        <span>{user.livesIn}</span>
      </div>
      <div className="info">
        <span>
          <b>E-mail: </b>
        </span>
        <span>{user.Email}</span>
      </div>
      {user._id === user1._id && (
        <button className="button" id="logout-button" onClick={handleLogOut}>
          Log Out
        </button>
      )}
    </div>
  );
};
