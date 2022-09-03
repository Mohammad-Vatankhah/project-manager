import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import makeAnimated from "react-select/animated";
import { MultiSelect } from "react-multi-select-component";
import { addEmployee } from "../../api/CompanyRequests";

export const AddEmployeeModal = (props) => {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const animatedComponents = makeAnimated();
  const user = useSelector((state) => state.authReducer.authData.user);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  let employeeOptions = [];
  user.followings.length > 0 &&
    user.followings.map((option) => {
      if (
        props.company?.employees.length > 0 &&
        props.company?.employees.includes(option)
      ) {
        return;
      }
      employeeOptions.push({ value: option, label: option });
    });
  const handleAdd = async (e) => {
    e.preventDefault();
    let data = { currentUserId: user._id, employees: [] };
    if (selectedEmployees.length > 0) {
      selectedEmployees.map((e, i) => (data.employees[i++] = e.value));
    }
    await addEmployee(props.company._id, data);
    window.location.reload();
  };
  return (
    <div className="addEmployeeModal">
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        size="55%"
        opened={props.modalOpened}
        onClose={() => props.setModalOpened(false)}
      >
        <form className="infoForm">
          <h3>Employees</h3>
          <div>
            <MultiSelect
              hasSelectAll={false}
              className="select-cw"
              isMulti
              value={selectedEmployees}
              placeholder={"Employees"}
              options={employeeOptions}
              onChange={setSelectedEmployees}
              components={animatedComponents}
              isSearchable={true}
            ></MultiSelect>
          </div>
          <button
            onClick={handleAdd}
            className="button"
            style={{ width: "5.5rem", height: "2rem" }}
          >
            Done
          </button>
        </form>
      </Modal>
    </div>
  );
};
