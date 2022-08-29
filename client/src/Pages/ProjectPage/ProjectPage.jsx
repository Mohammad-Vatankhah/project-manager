import React from "react";
import Project from "../../Components/Project/Project";
import "./ProjectPage.css";
import { useState } from "react";
import { FiHome } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { Processes } from "../../Components/Processes/Processes";
import { AddProcess } from "../../Components/AddProcess/AddProcess";
import { Comments } from "../../Components/Comments/Comments";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { User } from "../../Components/User/User";
import { getByUsername } from "../../api/UserRequest";
import { useEffect } from "react";
import { Company } from "../../Components/Company/Company";
import { Link } from "react-router-dom";
export const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState("Process");
  const param = useParams();
  const [modalOpened, setModalOpened] = useState(false);
  const projects = useSelector((state) => state.projectReducer.project);
  const project = projects.filter((p) => param.id === p._id);
  const currentProject = project[0];
  const iconStyle = { fontSize: 30, cursor: "pointer" };
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
  }, [currentProject]);
  const getEmployees = () => {
    currentProject.employees.map(async (e) => {
      const { data } = await getByUsername(e);
      setEmployees((prev) => [...prev, data]);
    });
  };

  return (
    <div className="ProjectPage">
      <div className="left">
        <span>Employees: </span>
        <div className="employeesCard">
          {employees.map((e) => (
            <User
              person={e}
              key={e._id}
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            />
          ))}
        </div>
        <br />
        <div style={{ marginBottom: "15px" }}>
          <span>Company: </span>
          {project[0].company === "" ? (
            "No companies set for this project."
          ) : (
            <Company company={project[0].company} />
          )}
        </div>
        <Project style={{ position: "sticky" }} data={project[0]} />
        <AddProcess modalOpened={modalOpened} setModalOpened={setModalOpened} />
      </div>
      <div className="right">
        <div className="navIcons">
          <Link style={{ textDecoration: "none", color: "black" }} to="../home">
            <FiHome style={iconStyle} />
          </Link>
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
          {activeTab === "Comments" && <Comments project={currentProject} />}
        </div>
      </div>
    </div>
  );
};
