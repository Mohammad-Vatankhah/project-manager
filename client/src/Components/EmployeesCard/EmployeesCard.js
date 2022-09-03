import React, { useEffect, useState } from "react";
import "./EmployeesCard.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { getByUsername } from "../../api/UserRequest";
import { User } from "../User/User";
import { AddEmployeeModal } from "../AddEmployeeModal/AddEmployeeModal";
export const EmployeesCard = ({ company }) => {
  const user = useSelector((state) => state.authReducer.authData.user);
  const [employees, setEmployees] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    if (company?.employees.length > 0) {
      company?.employees.map((e) => {
        getByUsername(e).then((res) => {
          setEmployees((prev) => [...prev, res.data]);
        });
      });
    }
  }, [company?.employees]);
  return (
    <div className="EmployeesCard">
      <div className="header">
        <h3>Employees</h3>
        {company?.owner === user._id && (
          <AiOutlinePlus
            style={{ cursor: "pointer", fontSize: "20px", color: "black" }}
            onClick={() => setModalOpened(true)}
          />
        )}
      </div>
      <div className="employeeCard">
        {company?.employees.length > 0
          ? employees.map((employee) => (
              <User person={employee} key={employee._id} />
            ))
          : "No employees available!"}
      </div>
      <AddEmployeeModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
        company={company}
      />
    </div>
  );
};
