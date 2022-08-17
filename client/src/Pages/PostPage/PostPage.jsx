import React from "react";
import { ProjectData } from "../../Data/ProjectData";
import Project from "../../Components/Project/Project";
import "./PostPage.css";
import { useState } from "react";
import { FiHome } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { Processes } from "../../Components/Processes/Processes";
import { AddProcess } from "../../Components/AddProcess/AddProcess";

export const PostPage = () => {
  const [activeTab, setActiveTab] = useState("Process");
  const [modalOpened, setModalOpened] = useState(false);

  const iconStyle = { fontSize: 30, cursor: "pointer" };
  return (
    <div className="PostPage">
      <div className="left">
        <span>Employees: </span>
        <br />
        <span>Company: </span>
        <Project style={{ position: "sticky" }} data={ProjectData[0]} />
        <button className="button" id= "process-bt" onClick={() => setModalOpened(true)}>
          Add Process
        </button>
        <AddProcess modalOpened={modalOpened} setModalOpened={setModalOpened} />
      </div>
      <div className="right">
        <div className="navIcons">
          <FiHome style={iconStyle} />
          <FiSettings style={iconStyle} />
          <MdNotificationsNone style={iconStyle} />
          <BiMessageDetail style={iconStyle} />
        </div>
        <div className="buttons">
          <button
            className={activeTab === "Process" ? "active" : ""}
            id="p-button"
            onClick={() => setActiveTab("Process")}
          >
            Process
          </button>
          <button
            className={activeTab === "Comments" ? "active" : ""}
            id="p-button"
            onClick={() => setActiveTab("Comments")}
          >
            Comments
          </button>
        </div>
        <div className="cp-right">
          {activeTab === "Process" && <Processes />}
        </div>
      </div>
    </div>
  );
};
