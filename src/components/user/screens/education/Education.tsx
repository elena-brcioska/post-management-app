import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import UserField from "../../userFields/UserField";
import { useState, type FC } from "react";
import { IEducation, type IUserProps } from "../../types";
import ActionBtn from "../../../UI/Buttons/ActionBtn/ActionBtn";
import StyledUserScreen from "../styled/UserScreen.styled";


const Education: FC<IUserProps> = ({ user, onUpdate }) => {

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [educationData, setEducationData] = useState<IEducation>(user.education);

  const handleFieldChange = (id: string, value: string ) => {
    setEducationData((prevData) => ({
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
      education: educationData
  });
  setIsEdit(false);
  };


  return (
    <StyledUserScreen>
      <Box className="user-screen-title">
      <h2>Education</h2>
      <ActionBtn onClick={!isEdit ? onClickEditHandler : onClickSaveHandler}>
          {!isEdit ? "Edit" : "Save"}
      </ActionBtn>
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="university" label="University:" data={educationData.university}  isEdit={isEdit} onChange={handleFieldChange} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="college" label="College:" data={educationData.college} isEdit={isEdit} onChange={handleFieldChange} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="degree" label="Degree:" data={educationData.degree} isEdit={isEdit} onChange={handleFieldChange} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="fieldOfStudy" label="Field of Study:" data={educationData.fieldOfStudy} isEdit={isEdit} onChange={handleFieldChange} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="graduationYear" label="Graduation Year:" data={educationData.graduationYear} isEdit={isEdit} onChange={handleFieldChange} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField type="number" id="gpa" label="GPA:" data={educationData.gpa} isEdit={isEdit} onChange={handleFieldChange} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="honors" label="Honors:" data={educationData.honors} isEdit={isEdit} onChange={handleFieldChange} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="relevantCoursework" label="Relevant Coursework:" data={educationData.relevantCoursework} isEdit={isEdit} onChange={handleFieldChange} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="extracurricularActivities" label="Extracurricular Activities:" data={educationData.extracurricularActivities} isEdit={isEdit} onChange={handleFieldChange} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <UserField id="certifications" label="Certifications:" data={educationData.certifications} isEdit={isEdit} onChange={handleFieldChange} />
        </Grid>
      </Grid>


    </StyledUserScreen>
  );
};

export default Education;
