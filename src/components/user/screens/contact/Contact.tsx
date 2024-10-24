import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import UserField from "../../userFields/UserField";
import { type Contact as IContact } from "../../../../pages/User/types";
import { type FC } from "react";

type ContactUSerProps = {
  user: IContact
}

const ContactInfo: FC<ContactUSerProps> = ({user}) => {
  return (
    <Box>
      <h2>Contact Information</h2>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="email" label="Email:" data={user.email} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="phoneNumber" label="Phone Number:" data={user.phoneNumber} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="linkedin" label="LinkedIn:" data={user.linkedin} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="gitHub" label="GitHub:" data={user.github} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="website" label="Website:" data={user.website} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="address" label="Address:" data={user.address} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="twitter" label="Twitter:" data={user.twitter} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="facebook" label="Facebook:" data={user.facebook} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactInfo;
