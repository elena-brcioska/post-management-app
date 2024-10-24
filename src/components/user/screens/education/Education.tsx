import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import UserField from "../../userFields/UserField";
import { type Education as IEducation } from "../../../../pages/User/types";
import { type FC } from "react";

type EducationUserProps = {
  user: IEducation
}

const Education: FC<EducationUserProps> = ({ user }) => {
  return (
    <Box>
      <h2>Education</h2>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="University:" data={user.university} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="College:" data={user.college} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Degree:" data={user.degree} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Field of Study:" data={user.fieldOfStudy} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Graduation Year:" data={user.graduationYear} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="GPA:" data={user.gpa} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Honors:" data={user.honors} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Relevant Coursework:" data={user.relevantCoursework} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Extracurricular Activities:" data={user.extracurricularActivities} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField label="Certifications:" data={user.certifications} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
