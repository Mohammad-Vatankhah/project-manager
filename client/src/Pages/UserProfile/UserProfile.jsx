import React, { useState } from "react";
import { UserProfileLeft } from "../../Components/UserProfileLeft/UserProfileLeft";
import "./UserProfile.css";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import Projects from "../../Components/Projects/Projects";
import RightSide from "../../Components/RightSide/RightSide";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import * as UserApi from "../../api/UserRequest.js";

export const UserProfile = () => {
  const user = useSelector((state) => state.authReducer.authData.user);
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, SetProfileUser] = useState({});
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
  }, []);
  return (
    <>
      {profileUser && (
        <div className="UserProfile">
          <UserProfileLeft user={profileUser} />
          <div className="profileCenter">
            <ProfileCard
              location="profilePage"
              user={user}
            />
            <Link
              style={{ textDecoration: "none" }}
              to={`/createProject/${user._id}`}
            >
              <button className="button" id="create-button">
                Create new project
              </button>
            </Link>
            <Projects />
          </div>
          <RightSide />
        </div>
      )}
    </>
  );
};
