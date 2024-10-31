import { Box } from "@mui/material";
import UserCard from "./UserCard";
import UserField from "../../userFields/UserField";
import Grid from '@mui/material/Grid2';
import { useState, type FC } from "react";
import {type IGeneral, type IGeneralUserProps } from "../../types";


const General: FC<IGeneralUserProps> = ({ user, userCard, onUpdate }) => {

    const [general, setGeneral] = useState<IGeneral>(user);

    const handleUpdate = (id: string, value: string) => {
        setGeneral((prev) => {
            const updatedGeneral = { ...prev, [id]: value };
            onUpdate(updatedGeneral);
            return updatedGeneral;
        });
    };

    return (
        <Box>
            <UserCard user={userCard} onUpdate={onUpdate} />
            <Box>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField id="birthDate" type="date" label="Birth Date:" data={general.birthDate} onSave={handleUpdate} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField id="jobTitle" label="Job Title:" data={general.jobTitle} onSave={handleUpdate} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField id="gender" type="radio" options={[
                            { value: "Female", label: "Female" },
                            { value: "Male", label: "Male" },
                            { value: "Other", label: "Other" },
                        ]} label="Gender:" data={general.gender} onSave={handleUpdate} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField id="company" label="Company:" data={general.company} onSave={handleUpdate} />
                    </Grid>
                </Grid>

            </Box>
        </Box>);
};

export default General;