import React from "react";
import "./Project.css";

import { ProjectReaction } from "../ProjectReaction/ProjectReaction";
import { ProjectDetails } from "../ProjectDetails/ProjectDetails";

const Project = ({ data, location }) => {
  const date = new Date(data.createdAt);
  const sDate = date.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour12: false,
  });
  return (
    <div className="Project">
      {data.image && (
        <img src={process.env.REACT_APP_PUBLIC_FOLDER + data.image} alt="" />
      )}
      {data.image ? (
        <div>
          <ProjectReaction data={data} location={location} />
          <ProjectDetails data={data} img={true} />
        </div>
      ) : (
        <div>
          <ProjectDetails data={data} img={false} />
          <ProjectReaction data={data} location={location} />
        </div>
      )}

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>{sDate}</span>
    </div>
  );
};

export default Project;
