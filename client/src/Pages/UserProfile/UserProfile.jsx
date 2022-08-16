import React from "react";
import { UserProfileLeft } from "../../Components/UserProfileLeft/UserProfileLeft";
import "./UserProfile.css";
import ProfileCard from "../../Components/ProfileCard/ProfileCard"
import Projects from "../../Components/Projects/Projects"
import RightSide from "../../Components/RightSide/RightSide"

export const UserProfile = () => {
  return <div className="UserProfile">
        <UserProfileLeft />
        <div className="profileCenter">
            <ProfileCard />
            <Projects />
        </div>
            <RightSide />
      </div>;
};
