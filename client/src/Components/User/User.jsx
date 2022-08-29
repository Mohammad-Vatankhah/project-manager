import "./User.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../actions/UserAction";
import { Link } from "react-router-dom";
export const User = ({ person }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData.user);
  const [following, setFollowing] = useState(
    user.followings.includes(person.username)
  );
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const handleFollow = () => {
    following
      ? dispatch(unfollowUser(person._id, person.username, user))
      : dispatch(followUser(person._id, person.username, user));
    setFollowing((prev) => !prev);
  };
  return (
    <div className="User">
      <div>
        <img
          src={
            person.profilePicture
              ? serverPublic + person.profilePicture
              : serverPublic + "defaultProfilePicture.jpg"
          }
          alt=""
          className="followerImage"
        />
        <div className="PersonName">
          <span>{person.firstName + " " + person.lastName}</span>
          <Link
            to={`/profile/${person._id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              maxWidth: "110px",
            }}
          >
            <span>@{person.username}</span>
          </Link>
        </div>
      </div>
      {person._id !== user._id && (
        <button
          className={following ? "button unfollow" : "button"}
          id="fc-button"
          onClick={handleFollow}
        >
          {following ? "Unfollow" : "Follow"}
        </button>
      )}
    </div>
  );
};
