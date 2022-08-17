import { Modal, useMantineTheme } from "@mantine/core";
function ProfileModal(props) {
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
        <h3>Your info</h3>
        <div>
          <input
            className="infoInput"
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <input
            className="infoInput"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            className="infoInput"
            type="text"
            name="status"
            placeholder="Status"
          />
        </div>
        <div>
          <input
            className="infoInput"
            type="text"
            name="livesIn"
            placeholder="Lives in"
          />
          <input
            className="infoInput"
            type="text"
            name="company"
            placeholder="Company"
          />
        </div>
        <div>
          <input type="text" className="infoInput" placeholder="E-mail" />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImage" />
        </div>
        <button style={{ width: "6rem", height: "2rem" }} className="button">
          Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
