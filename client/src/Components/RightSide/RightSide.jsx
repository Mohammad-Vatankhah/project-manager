import React from "react";
import "./RightSide.css";
import { FiHome } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import TrendCard from "../TrendCard/TrendCard";
import { useState } from "react";

const RightSide = () => {
  const iconStyle = { fontSize: 30, cursor: "pointer" };
  const iconStyleActive = {
    fontSize: 30,
    cursor: "pointer",
    color: "var(--blue)",
  };
  return (
    <div className="RightSide">
      <div className="navIcons">
        <FiHome style={iconStyleActive} />
        <FiSettings style={iconStyle} />
        <MdNotificationsNone style={iconStyle} />
        <BiMessageDetail style={iconStyle} />
      </div>
      <TrendCard />
    </div>
  );
};

export default RightSide;
