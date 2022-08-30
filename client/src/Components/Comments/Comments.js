import React, { useRef } from "react";
import "./Comments.css";
import { BiSend } from "react-icons/bi";
import * as ProjectApi from "../../api/ProjectRequest";
import { Comment } from "../Comment/Comment";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

export const Comments = ({ project }) => {
  const comment = useRef();
  const [currentProject, setCorrentProject] = useState(project);
  const user = useSelector((state) => state.authReducer.authData.user);
  const handleSend = async () => {
    comment.current.value !== "" &&
      (await ProjectApi.addComment(project._id, {
        userId: user._id,
        desc: comment.current.value,
      }));
    comment.current.value = "";
    setProject();
  };
  const setProject = () => {
    ProjectApi.getProject(project._id).then((res) => {
      setCorrentProject(res.data);
    });
  };

  useEffect(() => {
    setProject();
  }, []);
  return (
    <div className="Comments">
      <div className="create-comment">
        <input type="text" placeholder="Post a comment" ref={comment} />
        <BiSend
          style={{ fontSize: "33px", color: "var(--blue)" }}
          onClick={handleSend}
        />
      </div>
      <div className="commentBox">
        {currentProject.comments
          .sort((a, b) => {
            const keyA = new Date(a.createdAt);
            const keyB = new Date(b.createdAt);
            if (keyA < keyB) return 1;
            if (keyA > keyB) return -1;
            return 0;
          })
          .map((comment) => {
            return <Comment data={comment} key={comment._id} />;
          })}
      </div>
    </div>
  );
};
