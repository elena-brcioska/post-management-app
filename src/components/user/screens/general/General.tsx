import { Box } from "@mui/material";
import UserCard from "./UserCard";
import UserField from "../../userFields/UserField";
import Grid from '@mui/material/Grid2';
import { useState, type FC } from "react";
import { IGeneral, type IUserProps } from "../../types";
import ActionBtn from "../../../UI/Buttons/ActionBtn/ActionBtn";
import StyledUserScreen from "../styled/UserScreen.styled";


const General: FC<IUserProps> = ({ user, onUpdate }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [generalData, setGeneralData] = useState<IGeneral>(user.general);

    const handleFieldChange = (id: string, value: string) => {
        setGeneralData((prevData) => ({
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
            general: generalData
        });
        setIsEdit(false);
    };

    return (
        <Box>
            <UserCard user={user} onUpdate={onUpdate} />
            <StyledUserScreen>

                <Box className="user-screen-title">
                    <h2>Education</h2>
                    <ActionBtn onClick={!isEdit ? onClickEditHandler : onClickSaveHandler}>
                        {!isEdit ? "Edit" : "Save"}
                    </ActionBtn>
                </Box>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField id="birthDate" type="date" label="Birth Date:" data={generalData.birthDate} onChange={handleFieldChange} isEdit={isEdit} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField id="jobTitle" label="Job Title:" data={generalData.jobTitle} onChange={handleFieldChange} isEdit={isEdit} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField id="gender" type="radio" options={[
                            { value: "Female", label: "Female" },
                            { value: "Male", label: "Male" },
                            { value: "Other", label: "Other" },
                        ]} label="Gender:" data={generalData.gender} onChange={handleFieldChange} isEdit={isEdit} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField id="company" label="Company:" data={generalData.company} onChange={handleFieldChange} isEdit={isEdit} />
                    </Grid>
                </Grid>

            </StyledUserScreen>
        </Box>);
};

export default General;