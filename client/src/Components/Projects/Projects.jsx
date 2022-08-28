import React from "react";
import "./Projects.css";
import Project from "../Project/Project";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTimelinePost } from "../../actions/ProjectAction";
import { useParams } from "react-router-dom";
const Projects = () => {
  const params = useParams();
  useEffect(() => {
    dispatch(getTimelinePost(user._id));
  }, []);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData.user);
  let { project, loading } = useSelector((state) => state.projectReducer);
  if (!project) {
    return "No projects available";
  }
  if (params.id)
    project = project.filter((project) => project.publisher === params.id);
  return (
    <div className="Projects">
      {loading
        ? "Loading projects. Please wait..."
        : project.map((project, id) => {
            return <Project data={project} id={id} key={project._id} location="home" />;
          })}
    </div>
  );
};

export default Projects;
