import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import UserField from "../../userFields/UserField";
import { useState, type FC } from "react";
import { type IContact, type IContactUserProps } from "../../types";


const ContactInfo: FC<IContactUserProps> = ({user, onUpdate}) => {

  const [contact, setContact] = useState<IContact>(user);

  const handleUpdate = (id: string, value: string) => {
    setContact((prev) => {
      const updatedContact = { ...prev, [id]: value };
      onUpdate(updatedContact);
      return updatedContact;
    });
  };

  return (
    <Box>
      <h2>Contact Information</h2>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="email" label="Email:" data={contact.email} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="phoneNumber" label="Phone Number:" data={contact.phoneNumber} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="linkedin" label="LinkedIn:" data={contact.linkedin} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="gitHub" label="GitHub:" data={contact.github} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="website" label="Website:" data={contact.website} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="address" label="Address:" data={contact.address} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="twitter" label="Twitter:" data={contact.twitter} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="facebook" label="Facebook:" data={contact.facebook} onSave={handleUpdate} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactInfo;
