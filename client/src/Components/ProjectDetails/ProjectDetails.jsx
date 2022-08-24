import React from "react";
import { useSelector } from "react-redux";

export const ProjectDetails = (props) => {
  const { data, img } = props;
  const style = img ? { marginTop: "15px" } : { marginBottom: "15px" };
  const user = useSelector((state) => state.authReducer.authData.user);
  return (
    <div className="ProjectDetails" style={style}>
      <span>
        <b>{user.username}:</b>
      </span>
      <span> {data.data.desc}</span>
    </div>
  );
};
