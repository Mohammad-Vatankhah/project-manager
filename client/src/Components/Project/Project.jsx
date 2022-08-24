import React from "react";
import "./Project.css";

import { useSelector } from "react-redux";
import { useState } from "react";
import { ProjectReaction } from "../ProjectReaction/ProjectReaction";
import { ProjectDetails } from "../ProjectDetails/ProjectDetails";

const Project = (data) => {
  const user = useSelector((state) => state.authReducer.authData.user);

  const date = new Date(data.data.createdAt);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const sDate = `${
    weekday[date.getDay()] +
    ", " +
    date.getDate() +
    " " +
    month[date.getMonth()] +
    " " +
    date.getFullYear()
  }`;
  console.log(sDate);
  return (
    <div className="Project">
      {data.data.image && (
        <img
          src={process.env.REACT_APP_PUBLIC_FOLDER + data.data.image}
          alt=""
        />
      )}
      {data.data.image ? (
        <div>
          <ProjectReaction data={data} />
          <ProjectDetails data={data} img={true} />
        </div>
      ) : (
        <div>
          <ProjectDetails data={data} img={false} />
          <ProjectReaction data={data} />
        </div>
      )}

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>{sDate}</span>
    </div>
  );
};

export default Project;
