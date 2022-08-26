import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import * as UserApi from "../../api/UserRequest.js";
import { logOut } from "../../actions/AuthActions";
export const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, SetProfileUser] = useState({});
  const user = useSelector((state) => state.authReducer.authData.user);
  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        SetProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        SetProfileUser(profileUser.data);
      }
    };
    fetchProfileUser();
  }, [profileUserId]);

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div className="InfoCard">
      <div className="infoHead">
        {profileUserId === user._id ? (
          <>
            <h4>Your Info</h4>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
          </>
        ) : (
          <h4>{profileUser.firstName + "'s info"}</h4>
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
        <span>{profileUser.status}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in: </b>
        </span>
        <span>{profileUser.livesIn}</span>
      </div>
      <div className="info">
        <span>
          <b>E-mail: </b>
        </span>
        <span>{profileUser.Email}</span>
      </div>
      {profileUserId === user._id && (
        <button className="button" id="logout-button" onClick={handleLogOut}>
          Log Out
        </button>
      )}
    </div>
  );
};
