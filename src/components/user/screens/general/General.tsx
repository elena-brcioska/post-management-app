import { Box } from "@mui/material";
import UserCard from "./UserCard";
import UserField from "../../userFields/UserField";
import Grid from '@mui/material/Grid2';
import { type General as IGeneral, type UserCard as IUserCard } from "../../../../pages/User/types";
import { type FC } from "react";

type GeneralUserProps = {
    user: IGeneral,
    userCard: IUserCard
}


const General: FC<GeneralUserProps> = ({user, userCard}) => {
    return (
        <Box>
            <UserCard user={userCard} />
            <Box>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField type="date" label="Birth Date:" data={user.birthDate} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField label="Job Title:" data={user.jobTitle} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField label="Gender:" data={user.gender} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField label="Company:" data={user.company} />
                    </Grid>
                </Grid>

            </Box>
        </Box>);
};

export default General;