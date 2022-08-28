import React, { useState } from "react";
import "./ProjectReaction.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { likePost } from "../../api/ProjectRequest";
import { useNavigate } from "react-router-dom";

export const ProjectReaction = ({ data, location }) => {
  console.log(data);
  const navigate = useNavigate();
  const user = useSelector((state) => state.authReducer.authData.user);
  const likeStyle = { fontSize: 30, color: "var(--blue)", cursor: "pointer" };
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  const handleLike = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  const handleView = () => {
    navigate(`/project/${data._id}`);
  };
  return (
    <div className="ProjectReaction">
      {liked ? (
        <AiFillHeart style={likeStyle} onClick={handleLike} />
      ) : (
        <AiOutlineHeart style={likeStyle} onClick={handleLike} />
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
      {location === "home" && (
        <button
          className="button"
          style={{ width: "6rem", height: "2rem", marginLeft: "15px" }}
          onClick={handleView}
        >
          View Project
        </button>
      )}
    </div>
  );
};
