import React from "react";
import { useSelector } from "react-redux";

export const ProjectDetails = ({data, img}) => {
  const style = img ? { marginTop: "15px" } : { marginBottom: "15px" };
  return (
    <div className="ProjectDetails" style={style}>
      <span>
        <b>{data.employees[0]}:</b>
      </span>
      <span> {data.desc}</span>
    </div>
  );
};
