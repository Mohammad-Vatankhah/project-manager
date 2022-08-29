import React from "react";
import "./Comments.css";
import { Comment } from "../Comment/Comment";
export const Comments = ({comments}) => {
  return (
    <div className="Comments">

      {comments.map((comment) => {
        return <Comment data={comment} key={comment._id}/>;
      })}
    </div>
  );
};
