import React from "react";
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import * as UserApi from "../../api/UserRequest.js";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProfileCard = ({ location }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const [profileUser, setProfileUser] = useState({});
  const params = useParams();
  const profileUserId = params.id;
  const user = useSelector((state) => state.authReducer.authData.user);
  const projects = useSelector((state) => state.projectReducer.project);
  const fetchProfileUser = () => {
    if (location === "home" || profileUserId === user._id) {
      setProfileUser(user);
    } else {
      UserApi.getUser(profileUserId).then((res) => {
        setProfileUser(res.data);
      });
    }
  };
  useEffect(() => {
    fetchProfileUser();
  }, [profileUserId]);
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            profileUser.coverPicture
              ? serverPublic + profileUser.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt=""
        />
        <img
          src={
            profileUser.profilePicture
              ? serverPublic + profileUser.profilePicture
              : serverPublic + "defaultProfilePicture.jpg"
          }
          alt=""
        />
      </div>

      <div className="ProfileName">
        <span>@{profileUser.username}</span>
        <span>{profileUser.firstName + " " + profileUser.lastName}</span>
        {profileUser.status && <span>{profileUser.status}</span>}
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{profileUser.followings ? profileUser.followings.length : "loading..."}</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{profileUser.followers ? profileUser.followers.length : "loading..."}</span>
            <span>Followers</span>
          </div>
          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {
                    projects.filter(
                      (project) => project.publisher === profileUser._id
                    ).length
                  }
                </span>
                <span>Projects</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      <Link
        className="myProfile"
        style={{ textDecoration: "none" }}
        to={`/profile/${user._id}`}
      >
        {location === "profilePage" ? "" : <span>My Profile</span>}
      </Link>
    </div>
  );
};

export default ProfileCard;
