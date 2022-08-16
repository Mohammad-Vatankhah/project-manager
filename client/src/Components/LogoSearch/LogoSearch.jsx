import React from "react";
import Select from "react-select";
import "./LogoSearch.css";
import { UilSearch } from "@iconscout/react-unicons";
import { FaUserAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const LogoSearch = () => {
  const customControlStyles = (base) => ({
    height: 20,
    minHeight: 20,
  });
  // const options = [
  //   { value: "employee", label: <FaUserAlt color="#f99827" /> },
  //   { value: "company", label: <FaBuilding color="#f99827" /> },
  // ];
  return (
    <div className="LogoSearch">
      {/* <Select
        placeholder=""
        defaultValue={{
          value: "employee",
          label: <FaUserAlt color="#f99827" />,
        }}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        styles={{ control: customControlStyles }}
        className="select"
        options={options}
      /> */}
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
