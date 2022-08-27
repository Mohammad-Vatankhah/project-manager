import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../actions/UploadAction";
import "../../Pages/Auth/Auth.css";
import { createCompany } from "../../actions/CompanyActions";
export const CompanyModal = (props) => {
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData.user);
  const [formData, setFormData] = useState({ owner: user._id });
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const { uploading: creating, uploaded: created } = useSelector(
    (state) => state.companyReducer
  );
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      e.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let companyData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      companyData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      companyData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(createCompany(formData));
    created && props.setModalOpened(false);
  };
  return (
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
        <h3>Company</h3>
        <div>
          <input
            className="infoInput"
            type="text"
            name="name"
            placeholder="Company Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="infoInput"
            type="text"
            name="companyId"
            placeholder="Company ID"
            onChange={handleChange}
          />
          <input
            className="infoInput"
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="infoInput"
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            className="infoInput"
            name="Email"
            placeholder="E-mail"
            onChange={handleChange}
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImage" onChange={onImageChange} />
          Cover Image
          <input type="file" name="coverImage" onChange={onImageChange} />
        </div>
        <button
          style={{ width: "6rem", height: "2rem" }}
          className="button"
          onClick={handleSubmit}
          disabled={creating}
        >
          {creating ? "Creating..." : "Create"}
        </button>
      </form>
    </Modal>
  );
};
