import React, { useEffect, useState } from "react";
import "./Processes.css";
import { Process } from "../Process/Process";
export const Processes = ({ project }) => {
  return (
    <div className="Processes">
      {project.process.length > 0
        ? project.process
            .sort((a, b) => {
              const keyA = new Date(a.createdAt);
              const keyB = new Date(b.createdAt);
              if (keyA < keyB) return 1;
              if (keyA > keyB) return -1;
              return 0;
            })
            .map((p) => {
              return <Process data={p} key={p._id} />;
            })
        : "No process available!"}
    </div>
  );
};
