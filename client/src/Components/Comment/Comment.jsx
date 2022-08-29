import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as UserApi from "../../api/UserRequest";
import "./Comment.css";
export const Comment = ({ data }) => {
  const [user, setUser] = useState({});
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const fetchUser = () => {
    UserApi.getUser(data.userId).then((res) => {
      const userData = res.data;
      setUser(userData);
    });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const date = new Date(data.createdAt);
  const time = date.toLocaleDateString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="Comment">
      <div className="comment-data">
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfilePicture.jpg"
          }
          alt=""
        />
        <span className="cm">
          <span>
            <b>{user.username}:</b>
            {" " + data.desc}
          </span>
        </span>
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>{time}</span>
    </div>
  );
};
