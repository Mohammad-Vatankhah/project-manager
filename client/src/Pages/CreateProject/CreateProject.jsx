import React from "react";
import { useState, useRef } from "react";
import AsyncSelect from "react-select/async";
import "./CreateProject.css";
import { BsFillImageFill } from "react-icons/bs";
import { UilTimes } from "@iconscout/react-unicons";

const CreateProject = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedCoworkers, setSelectedCoworkers] = useState([]);
  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
      backgroundColor: "rgba(40, 52, 62, 0.07)",
      borderRadius: "10px",
    }),
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="cp">
      <div className="CreateProject">
        <h1>Create New Project</h1>
        <div className="inputs">
          <div className="line1">
            <input type="text" placeholder="Project Name" />
            <AsyncSelect
              value={selectedCompany}
              styles={style}
              placeholder={"Company"}
              className="select"
            ></AsyncSelect>
          </div>
          <div className="line2">
            <AsyncSelect
              className="select-cw"
              isMulti
              styles={style}
              value={selectedCoworkers}
              placeholder={"Co-Workers"}
            ></AsyncSelect>
          </div>
          <div className="line3">
            <textarea
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
              <img src={image.image} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
