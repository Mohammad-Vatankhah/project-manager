import React from "react";
import "./Projects.css";
import Project from "../Project/Project";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTimelinePost } from "../../actions/ProjectAction";
import { useParams } from "react-router-dom";
import * as ProjectApi from "../../api/ProjectRequest";
import { useState } from "react";
import { getCompanyById, getCompanyProjects } from "../../api/CompanyRequests";
const Projects = ({ company }) => {
  const params = useParams();
  const [projects, setProjects] = useState([]);
  let { project } = useSelector((state) => state.projectReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (window.location.href.split("/")[3] === "company") {
      company?.projects.map((e) => {
        ProjectApi.getProject(e).then((res) => {
          setProjects((prev) => [...prev, res.data]);
        });
      });
    } else if (params.id)
      ProjectApi.getUserProject(params.id).then((res) => {
        setProjects(res.data);
      });
    else dispatch(getTimelinePost(user._id));
  }, [params.id, company]);
  const user = useSelector((state) => state.authReducer.authData.user);
  if (!project) {
    return "No projects available";
  }
  return (
    <div className="Projects">
      {params.id
        ? projects.length > 0
          ? projects.map((project, id) => {
              return (
                <Project
                  data={project}
                  id={id}
                  key={project._id}
                  location="home"
                />
              );
            })
          : "No projects available"
        : project.map((project, id) => {
            return (
              <Project
                data={project}
                id={id}
                key={project._id}
                location="home"
              />
            );
          })}
    </div>
  );
};

export default Projects;
