import React, { useEffect, useState } from "react";
import "./EmployeesCard.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { getUser } from "../../api/UserRequest";
import { User } from "../User/User";
export const EmployeesCard = ({ company }) => {
  const user = useSelector((state) => state.authReducer.authData.user);
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    if (company?.employees.length > 0) {
      company?.employees.map((e) => {
        getUser(e).then((res) => {
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
          />
        )}
      </div>
      {company?.employees.length > 0
        ? employees.map((employee) => (
            <User person={employee} key={employee._id} />
          ))
        : "No employees available!"}
    </div>
  );
};
