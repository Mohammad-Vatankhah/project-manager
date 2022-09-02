import React from "react";
import Projects from "../Projects/Projects";
import "./PostSide.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const PostSide = ({ company }) => {
  const user = useSelector((state) => state.authReducer.authData.user);
  return (
    <div className="PostSide">
      {!company && (
        <Link
          style={{ textDecoration: "none" }}
          to={`/createProject/${user._id}`}
        >
          <button className="button" id="create-button">
            Create new project
          </button>
        </Link>
      )}
      <Projects company={company} />
    </div>
  );
};

export default PostSide;
