import React from "react";
import "./Project.css";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

const Project = (data) => {
  return (
    <div className="Project">
      <img src={data.data.img} alt="" />
      <div className="projectReaction">
        {data.data.liked ? (
          <AiFillHeart
            style={{ fontSize: 30, color: "orange", cursor: "pointer" }}
          />
        ) : (
          <AiOutlineHeart
            style={{ fontSize: 30, color: "orange", cursor: "pointer" }}
          />
        )}
        <FaRegCommentAlt
          style={{
            fontSize: 25,
            color: "orange",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        />
        <FiSend
          style={{
            fontSize: 30,
            color: "orange",
            marginLeft: "10px",
            cursor: "pointer",
          }}
        />
      </div>
      <span>{data.data.likes} likes</span>
      <div className="detail">
        <span>
          <b>{data.data.name}:</b>
        </span>
        <span> {data.data.desc}</span>
      </div>
    </div>
  );
};

export default Project;
