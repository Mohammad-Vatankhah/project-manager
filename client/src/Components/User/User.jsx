import "./User.css";
import React from "react";

export const User = ({ person }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="User">
      <div>
        <img
          src={
            person.coverPicture
              ? serverPublic + person.profilePicture
              : serverPublic + "defaultCover.jpg"
          }
          alt=""
          className="followerImage"
        />
        <div className="name">
          <span>{person.firstName + " " + person.lastName}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button className="button" id="fc-button">
        Follow
      </button>
    </div>
  );
};
