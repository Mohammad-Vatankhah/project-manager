import React from "react";
import "./Processes.css";
import { ProjectData } from "../../Data/ProjectData";
import { Process } from "../Process/Process";
export const Processes = () => {
  return (
    <div className="Processes">
      {ProjectData.map((process) => {
        return <Process data={process} />;
      })}
    </div>
  );
};
