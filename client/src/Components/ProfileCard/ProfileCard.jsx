import React from "react";
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileCard = (props) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const user1 = useSelector((state) => state.authReducer.authData.user);
  const projects = useSelector((state) => state.projectReducer.project);
  const user = props.user;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user.coverPicture
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
          {props.location === "profilePage" && (
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
        to={`/profile/${user1._id}`}
      >
        {props.location === "profilePage" ? "" : <span>My Profile</span>}
      </Link>
    </div>
  );
};

export default ProfileCard;
