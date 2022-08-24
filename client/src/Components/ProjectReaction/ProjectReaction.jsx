import React, { useState } from "react";
import "./ProjectReaction.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";

export const ProjectReaction = (data) => {
   const data1 = data.data
   const user = useSelector((state) => state.authReducer.authData.user);
  const likeStyle = { fontSize: 30, color: "var(--blue)", cursor: "pointer" };
  const [liked, setLiked] = useState(data1.data.likes.includes(user._id));
  const [likes, setLikes] = useState(data1.data.likes.length);
  return (
    <div className="ProjectReaction">
      {liked ? (
        <AiFillHeart style={likeStyle} />
      ) : (
        <AiOutlineHeart style={likeStyle} />
      )}
      <span
        style={{
          color: "var(--gray)",
          fontSize: "12px",
          marginLeft: "15px",
        }}
      >
        {likes} likes
      </span>
      <button
        className="button"
        style={{ width: "6rem", height: "2rem", marginLeft: "15px" }}
      >
        View Project
      </button>
    </div>
  );
};
