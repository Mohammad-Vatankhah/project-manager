import React, { useEffect, useState } from "react";
import "./Process.css";
import * as UserApi from "../../api/UserRequest";
import { Link } from "react-router-dom";
export const Process = ({ data }) => {
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState();
  useEffect(() => {
    UserApi.getByUsername(data.employee).then((res) => {
      setUser(res.data);
    });
  }, []);
  const date = new Date(data.createdAt);
  const time = date.toLocaleDateString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="Process">
      <img
        className="processPic"
        src={data.image ? serverPublic + data.image : ""}
        alt=""
      />
      <div className="detail">
        <img
          className="profile"
          src={
            user?.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfilePicture.jpg"
          }
        />
        <Link
          to={`/profile/${user?._id}`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <span className="det">
            <b>{data.employee + ": "}</b>
            {data.desc}
          </span>
        </Link>
      </div>
      <span style={{ color: "var(--gray)", fontSize: "12px" }}>{time}</span>
    </div>
  );
};
