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
  return (
    <div className="Comment">
      <div className="comment-data">
        <img
          src={
            user.profilePicture
              ? serverPublic + "defaultProfilePicture.jpg"
              : serverPublic + user.profilePicture
          }
          alt=""
        />
        <span className="cm">
          <b>{user.username}:</b>
        </span>
        <br />
        <span>{data.desc}</span>
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.date}
      </span>
    </div>
  );
};
