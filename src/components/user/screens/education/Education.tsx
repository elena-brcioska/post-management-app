import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import UserField from "../../userFields/UserField";
import { useState, type FC } from "react";
import { type IEducation, type IEducationUserProps } from "../../types";


const Education: FC<IEducationUserProps> = ({ user, onUpdate }) => {

  const [education, setEducation] = useState<IEducation>(user);

  const handleUpdate = (id: string, value: string) => {
    setEducation((prev) => {
      const updatedEducation = { ...prev, [id]: value };
      onUpdate(updatedEducation);
      return updatedEducation;
    });
  };

  return (
    <Box>
      <h2>Education</h2>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="university" label="University:" data={education.university} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="collage" label="College:" data={education.college} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="degree" label="Degree:" data={education.degree} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="fieldOfStudy" label="Field of Study:" data={education.fieldOfStudy} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="graduationYear" label="Graduation Year:" data={education.graduationYear} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField type="number" id="gpa" label="GPA:" data={education.gpa} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="honors" label="Honors:" data={education.honors} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="relevantCoursework" label="Relevant Coursework:" data={education.relevantCoursework} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="extracurricularActivities" label="Extracurricular Activities:" data={education.extracurricularActivities} onSave={handleUpdate} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="certifications" label="Certifications:" data={education.certifications} onSave={handleUpdate} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
