import { Modal, useMantineTheme } from "@mantine/core";
import "./AddProcess.css";
export const AddProcess = (props) => {
  const theme = useMantineTheme();

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
        <h3>Add Process</h3>
        <textarea
          type="text"
          className="desc"
          name="desc"
          placeholder="Description"
        />
        <div>
          <span>Image:</span>
          <input type="file" name="processImage" />
        </div>
      </form>
    </Modal>
  );
};
