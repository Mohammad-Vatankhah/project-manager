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
  useEffect(() => {
    const fetchProfileUser = async () => {
      if ( location === "home" || profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser.data);
      }
    };
    fetchProfileUser();
  }, [user]);
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            profileUser.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt=""
        />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfilePicture.jpg"
          }
          alt=""
        />
      </div>

      <div className="ProfileName">
        <span>@{user.username}</span>
        <span>{user.firstName + " " + user.lastName}</span>
        {user.status && <span>{user.status}</span>}
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.followings.length}</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>
                  {
                    projects.filter((project) => project.publisher === user._id)
                      .length
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
