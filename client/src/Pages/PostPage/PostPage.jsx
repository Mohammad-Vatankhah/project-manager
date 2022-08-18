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
import { Comments } from "../../Components/Comments/Comments";
import { BiSend } from "react-icons/bi";

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
          {activeTab === "Process" && (
            <div className="processes">
              <button
                className="button"
                id="process-bt"
                onClick={() => setModalOpened(true)}
              >
                Add Process
              </button>
              <Processes />
            </div>
          )}
          {activeTab === "Comments" && (
            <div>
              <div className="create-comment">
                <input type="text" placeholder="Post a comment" />
                <BiSend style={{ fontSize: "33px", color: "var(--blue)" }} />
              </div>
              <Comments />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
