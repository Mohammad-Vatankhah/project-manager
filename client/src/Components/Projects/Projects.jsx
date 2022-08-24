import React from "react";
import "./Projects.css";
import Project from "../Project/Project";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTimelinePost } from "../../actions/ProjectAction";
const Projects = () => {
  useEffect(() => {
    dispatch(getTimelinePost(user._id));
  }, []);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData.user);
  const { project, loading } = useSelector((state) => state.projectReducer);
  return (
    <div className="Projects">
      {loading
        ? "Loading projects. Please wait..."
        : project.map((project, id) => {
            return <Project data={project} id={id} />;
          })}
    </div>
  );
};

export default Projects;
