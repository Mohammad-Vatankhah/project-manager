import React from 'react'
import "./EmployeesCard.css"
import { Followers } from "../../Data/FollowersData";

export const EmployeesCard = () => {
  return (
    <div className='EmployeesCard'>
      <h3>Employees</h3>
      {Followers.map((employee, id) => {
        return (
          <div className="employee">
            <div>
              <img src={employee.img} alt="" className="employeeImage" />
              <div className="name">
                <span>{employee.name}</span>
                <span>@{employee.username}</span>
              </div>
            </div>
            <button className="button" id="view-employee">View</button>
          </div>
        );
      })}
    </div>
  )
}
