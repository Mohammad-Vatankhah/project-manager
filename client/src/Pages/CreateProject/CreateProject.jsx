import React from "react";
import { useState, useRef } from "react";
import Select from "react-select";
import "./CreateProject.css";
import makeAnimated from "react-select/animated";
import { BsFillImageFill } from "react-icons/bs";
import { UilTimes } from "@iconscout/react-unicons";
import { MultiSelect } from "react-multi-select-component";

import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadProject } from "../../actions/UploadAction";
import { Navigate } from "react-router-dom";

export const CreateProject = () => {
  const dispatch = useDispatch();
  // get user data from authData
  const user = useSelector((state) => state.authReducer.authData.user);
  const [coWorkers, setCoWorkers] = useState([]);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const desc = useRef();
  const [selectedCompany, setSelectedCompany] = useState("");
  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
      backgroundColor: "rgba(40, 52, 62, 0.07)",
      borderRadius: "10px",
    }),
  };

  const uploading = useSelector((state) => state.projectReducer.uploading);
  const uploaded = useSelector((state) => state.projectReducer.uploaded);

  // set options for company
  const animatedComponents = makeAnimated();
  const userCompanies = user.companies;
  let companyOptions = [{ value: "", label: "Remove company" }];
  userCompanies.length > 0 &&
    userCompanies.map((c, i) => {
      companyOptions[i + 1] = { value: c, label: c };
    });
  // set options for co-workers
  let coWorkerOptions = [];
  user.followings.length > 0 &&
    user.followings.map((u, i) => {
      coWorkerOptions[i + 1] = { value: u, label: u };
    });

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  const handleChange = (e) => {
    setSelectedCompany(e.value);
  };

  const handleShare = (e) => {
    e.preventDefault();
    let employees = [user.username];
    if (coWorkers.length > 0) {
      coWorkers.map((c, i) => {
        employees[++i] = c.value;
      });
    }
    const newProject = {
      publisher: user._id,
      desc: desc.current.value,
      employees: employees,
      company: selectedCompany,
    };
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newProject.image = filename;
      console.log(data);
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    try {
      dispatch(uploadProject(newProject));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="cp">
      <div className="CreateProject">
        <h1>Create New Project</h1>
        <div className="inputs">
          <div className="line1">
            <input type="text" placeholder="Project Name" />
            <Select
              options={companyOptions}
              value={selectedCompany}
              styles={style}
              placeholder={selectedCompany !== "" ? selectedCompany : "Company"}
              className="select"
              onChange={handleChange}
              isSearchable={true}
            ></Select>
          </div>
          <div className="line2">
            <MultiSelect
              hasSelectAll={false}
              className="select-cw"
              isMulti
              value={coWorkers}
              placeholder={"Co-Workers"}
              options={coWorkerOptions}
              onChange={setCoWorkers}
              components={animatedComponents}
              isSearchable={true}
            ></MultiSelect>
          </div>
          <div className="line3">
            <textarea
              ref={desc}
              required
              className="description"
              cols="30"
              rows="10"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="line4" style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
          <div className="addImage" onClick={() => imageRef.current.click()}>
            <BsFillImageFill
              style={{ fontSize: 30, position: "relative", zIndex: 1000 }}
            />
            <p>Add Photo</p>
          </div>
          {image && (
            <div className="preViewImage">
              <UilTimes
                style={{
                  cursor: "pointer",
                  position: "relative",
                  zIndex: 1000,
                }}
                onClick={() => setImage(null)}
              />
              <img src={URL.createObjectURL(image)} alt="" />
            </div>
          )}
        </div>
        <button
          className="button share-button"
          onClick={handleShare}
          disabled={uploading}
        >
          {uploading ? "Uploading" : "Share"}
          {uploaded && <Navigate to={"../home"} />}
        </button>
      </div>
    </div>
  );
};
