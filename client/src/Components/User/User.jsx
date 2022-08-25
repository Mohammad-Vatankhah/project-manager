import "./User.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unfollowUser } from "../../actions/UserAction";
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
      <button
        className={following ? "button unfollow" : "button"}
        id="fc-button"
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};
