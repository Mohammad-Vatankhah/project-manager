import React from "react";
import "./Comments.css";
import { CommentData } from "../../Data/CommentsData";
import { Comment } from "../Comment/Comment";
export const Comments = () => {
  return (
    <div className="Comments">

      {CommentData.map((comment) => {
        return <Comment data={comment} />;
      })}
    </div>
  );
};
