import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import UserField from "../../userFields/UserField";

const Education = () => {
  return (
    <Box>
      <h2>Education</h2>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="University:" data="Example University" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="College:" data="Example College" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Degree:" data="Bachelor of Science" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Field of Study:" data="Computer Science" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Graduation Year:" data="2022" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="GPA:" data="3.8" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Honors:" data="Summa Cum Laude" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Relevant Coursework:" data="Data Structures, Web Development" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Extracurricular Activities:" data="Coding Club, Robotics Team" />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Certifications:" data="Certified Front End Developer" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
