import React from "react";
import { UserProfileLeft } from "../../Components/UserProfileLeft/UserProfileLeft";
import "./UserProfile.css";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Projects from "../../Components/Projects/Projects";
import RightSide from "../../Components/RightSide/RightSide";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const UserProfile = () => {
  const params = useParams();
  const user = useSelector((state) => state.authReducer.authData.user);
  return (
    <>
      (
      <div className="UserProfile">
        <UserProfileLeft />
        <div className="profileCenter">
          <ProfileCard location="profilePage" />
          {user._id === params.id && (
            <Link
              style={{ textDecoration: "none" }}
              to={`/createProject/${user._id}`}
            >
              <button className="button" id="create-button">
                Create new project
              </button>
            </Link>
          )}
          <Projects />
        </div>
        <RightSide />
      </div>
      )
    </>
  );
};
