import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/UploadAction";
import { updateUser } from "../../actions/UserAction";
function ProfileModal(props) {
  const dispathch = useDispatch();
  const param = useParams();
  const theme = useMantineTheme();
  const { password, ...other } = props.data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const user = useSelector((state) => state.authReducer.authData.user);
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
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispathch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispathch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispathch(updateUser(param.id, UserData));
    props.setModalOpened(false);
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
        <h3>Your info</h3>
        <div>
          <input
            className="infoInput"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstName}
          />
          <input
            className="infoInput"
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>
        <div>
          <input
            className="infoInput"
            type="text"
            name="status"
            placeholder="Status"
            onChange={handleChange}
            value={formData.status}
          />
        </div>
        <div>
          <input
            className="infoInput"
            type="text"
            name="livesIn"
            placeholder="Lives in"
            onChange={handleChange}
            value={formData.livesIn}
          />
        </div>
        <div>
          <input
            type="email"
            className="infoInput"
            name="Email"
            placeholder="E-mail"
            onChange={handleChange}
            value={formData.Email}
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
        >
          Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
