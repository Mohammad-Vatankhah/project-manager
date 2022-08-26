import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import FollowersCard from "../FollowersCard/FollowersCard";
import { InfoCard } from "../InfoCard/InfoCard";
import "../ProfileSide/ProfileSide.css";
import { CompaniesCard } from "../CompaniesCard/CompaniesCard";
export const UserProfileLeft = ({ user }) => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard user={user} />
      <CompaniesCard />
      <FollowersCard />
    </div>
  );
};
