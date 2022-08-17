import React from "react";
import "./Process.css";

export const Process = (data) => {
  return (
    <div className="Process">
      <img src={data.data.img} alt="" />
      <div className="detail">
        <span>
          <b>{data.data.name}:</b>
        </span>
        <span> {data.data.desc}</span>
      </div>
    </div>
  );
};
