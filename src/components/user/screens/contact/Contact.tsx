import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import UserField from "../../userFields/UserField";
import { useState, type FC } from "react";
import { IContact, type IUserProps } from "../../types";
import ActionBtn from "../../../UI/Buttons/ActionBtn/ActionBtn";
import StyledUserScreen from "../styled/UserScreen.styled";


const ContactInfo: FC<IUserProps> = ({ user, onUpdate }) => {

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [contactData, setContactData] = useState<IContact>(user.contact);

  const handleFieldChange = (id: string, value: string) => {
    setContactData((prevData) => ({
      ...prevData,
      [id]: value
    }))
  }

  const onClickEditHandler = () => {
    setIsEdit(true);
  };

  const onClickSaveHandler = () => {
    onUpdate({
      ...user,
      contact: contactData
    });
    setIsEdit(false);
  };

  return (
    <StyledUserScreen>
      <Box className="user-screen-title">
        <h2>Contact information</h2>
        <ActionBtn onClick={!isEdit ? onClickEditHandler : onClickSaveHandler}>
          {!isEdit ? "Edit" : "Save"}
        </ActionBtn>
      </Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="email" label="Email:" data={contactData.email} onChange={handleFieldChange} isEdit={isEdit} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="phoneNumber" label="Phone Number:" data={contactData.phoneNumber} onChange={handleFieldChange} isEdit={isEdit} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="linkedin" label="LinkedIn:" data={contactData.linkedin} onChange={handleFieldChange} isEdit={isEdit} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="gitHub" label="GitHub:" data={contactData.github} onChange={handleFieldChange} isEdit={isEdit} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="website" label="Website:" data={contactData.website} onChange={handleFieldChange} isEdit={isEdit} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="address" label="Address:" data={contactData.address} onChange={handleFieldChange} isEdit={isEdit} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="twitter" label="Twitter:" data={user.contact.twitter} onChange={handleFieldChange} isEdit={isEdit} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="facebook" label="Facebook:" data={user.contact.facebook} onChange={handleFieldChange} isEdit={isEdit} />
        </Grid>
      </Grid>
    </StyledUserScreen>
  );
};

export default ContactInfo;
