import React from "react";
import "./RightSide.css";
import { FiHome } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const RightSide = () => {
  const iconStyle = { fontSize: 30, cursor: "pointer" };
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link style={{ textDecoration: "none" }} to="../home">
          <FiHome style={iconStyle} />
        </Link>
        <FiSettings style={iconStyle} />
        <MdNotificationsNone style={iconStyle} />
        <BiMessageDetail style={iconStyle} />
      </div>
    </div>
  );
};

export default RightSide;
