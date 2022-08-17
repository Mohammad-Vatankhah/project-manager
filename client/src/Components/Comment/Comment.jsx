import React from "react";
import "./Comment.css";
export const Comment = ({ data }) => {
  return (
    <div className="Comment">
      <div className="comment-data">
        <img src={data.profileImg} alt="" />
        <span className="cm">
          <b>{data.name}:</b> 
        </span><br />
        <span>{data.comment}</span>
      </div>
        <span style={{ color: "var(--gray)", fontSize: "12px",}}>{data.date}</span>
    </div>
  );
};
