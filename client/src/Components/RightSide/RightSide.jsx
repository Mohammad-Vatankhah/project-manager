import React from "react";
import "./RightSide.css";
import { FiHome } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import TrendCard from "../TrendCard/TrendCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home } from "../../Pages/Home/Home";

const RightSide = () => {
  const user = useSelector((state) => state.authReducer.authData);
  const iconStyle = { fontSize: 30, cursor: "pointer" };
  const iconStyleActive = {
    fontSize: 30,
    cursor: "pointer",
    color: "var(--blue)",
  };
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link style={{ textDecoration: "none" }} to="../home">
          <FiHome style={iconStyleActive} />
        </Link>
        <FiSettings style={iconStyle} />
        <MdNotificationsNone style={iconStyle} />
        <BiMessageDetail style={iconStyle} />
      </div>
      <TrendCard />
    </div>
  );
};

export default RightSide;
