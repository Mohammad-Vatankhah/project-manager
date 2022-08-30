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
import { useParams } from "react-router-dom";
import { User } from "../../Components/User/User";
import { getByUsername } from "../../api/UserRequest";
import { useEffect } from "react";
import { Company } from "../../Components/Company/Company";
import { Link } from "react-router-dom";
import * as ProjectApi from "../../api/ProjectRequest";
export const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState("Process");
  const param = useParams();
  const [modalOpened, setModalOpened] = useState(false);
  const iconStyle = { fontSize: 30, cursor: "pointer" };
  const [employees, setEmployees] = useState([]);
  const [project, setProject] = useState();
  useEffect(() => {
    fetchProject();
    getEmployees();
  }, [project?.comments.length]);
  const fetchProject = () => {
    ProjectApi.getProject(param.id).then((res) => {
      setProject(res.data);
    });
  };
  const getEmployees = () => {
    project?.employees.map((e) => {
      getByUsername(e).then((res) => {
        setEmployees((prev) => [...prev, res.data]);
      });
    });
  };
  return (
    <div className="ProjectPage">
      {project !== undefined ? (
        <>
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
              {project?.company === "" ? (
                "No companies set for this project."
              ) : (
                <Company company={project?.company} />
              )}
            </div>
            <Project style={{ position: "sticky" }} data={project} />
            <AddProcess
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
            />
          </div>
          <div className="right">
            <div className="navIcons">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="../home"
              >
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
              {activeTab === "Comments" && <Comments project={project} />}
            </div>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
