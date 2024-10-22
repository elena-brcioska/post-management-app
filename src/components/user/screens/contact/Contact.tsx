import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import UserField from "../../userFields/UserField";

const ContactInfo = () => {
  return (
    <Box>
      <h2>Contact Information</h2>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Email:" data="example@example.com" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Phone Number:" data="+123 456 7890" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="LinkedIn:" data="linkedin.com/in/example" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="GitHub:" data="github.com/example" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Website:" data="www.example.com" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Address:" data="123 Main St, City, Country" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Twitter:" data="@example" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Facebook:" data="facebook.com/example" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactInfo;
