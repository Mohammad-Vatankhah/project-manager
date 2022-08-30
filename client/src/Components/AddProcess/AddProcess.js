import { Modal, useMantineTheme } from "@mantine/core";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { uploadImage } from "../../actions/UploadAction";
import * as ProjectApi from "../../api/ProjectRequest";
import "./AddProcess.css";
export const AddProcess = ({ modalOpened, setModalOpened }) => {
  const theme = useMantineTheme();
  const desc = useRef();
  const imgRef = useRef();
  const params = useParams();
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const user = useSelector((state) => state.authReducer.authData.user);
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const newProcess = {
      currentUserId: user.username,
      desc: desc.current.value,
    };
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newProcess.image = filename;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
      ProjectApi.addProcess(params.id, newProcess)
        .then((res) => {
          if (res.status === 200) {
            setModalOpened(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    <Navigate to={`../project/${params.id}`} />;
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
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Add Process</h3>
        <textarea
          type="text"
          className="desc"
          ref={desc}
          name="desc"
          placeholder="Description"
        />
        <div>
          <span>Image:</span>
          <input
            type="file"
            name="processImage"
            ref={imgRef}
            onChange={onImageChange}
          />
        </div>
        <button type="submit" className="button addProcess" onClick={handleAdd}>
          Add
        </button>
      </form>
    </Modal>
  );
};
