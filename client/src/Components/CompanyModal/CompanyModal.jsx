import { Modal, useMantineTheme } from "@mantine/core";
import "../../Pages/Auth/Auth.css"
export const CompanyModal = (props) => {
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
        <h3>Company</h3>
        <div>
          <input
            className="infoInput"
            type="text"
            name="companyName"
            placeholder="Company Name"
          />
        </div>
        <div>
            <input
              className="infoInput"
              type="text"
              name="companyId"
              placeholder="Company ID"
            />
          <input
            className="infoInput"
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
          />
        </div>
        <div>
          <input
            className="infoInput"
            type="text"
            name="address"
            placeholder="Address"
          />
        </div>
        <div>
          <input type="email" className="infoInput" placeholder="E-mail" />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImage" />
        </div>
        <button style={{ width: "6rem", height: "2rem" }} className="button">
          Done
        </button>
      </form>
    </Modal>
  );
}

