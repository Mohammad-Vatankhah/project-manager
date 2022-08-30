import React from "react";
import "./Projects.css";
import Project from "../Project/Project";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTimelinePost } from "../../actions/ProjectAction";
import { useParams } from "react-router-dom";
import * as ProjectApi from "../../api/ProjectRequest";
import { useState } from "react";
const Projects = () => {
  const params = useParams();
  const [projects, setProjects] = useState({});
  let { project, loading } = useSelector((state) => state.projectReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (params.id)
      ProjectApi.getUserProject(params.id).then((res) => {
        setProjects(res.data);
      });
    else dispatch(getTimelinePost(user._id));
  }, [params.id]);
  const user = useSelector((state) => state.authReducer.authData.user);
  if (!project) {
    return "No projects available";
  }
  return (
    <div className="Projects">
      {loading
        ? "Loading projects. Please wait..."
        : params.id && projects.length > 0
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
