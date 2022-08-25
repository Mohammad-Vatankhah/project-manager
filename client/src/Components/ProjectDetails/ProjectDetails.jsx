import React from "react";
import { useSelector } from "react-redux";

export const ProjectDetails = (props) => {
  const { data, img } = props;
  const style = img ? { marginTop: "15px" } : { marginBottom: "15px" };
  return (
    <div className="ProjectDetails" style={style}>
      <span>
        <b>{data.data.employees[0]}:</b>
      </span>
      <span> {data.data.desc}</span>
    </div>
  );
};
