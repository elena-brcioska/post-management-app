import { Box } from "@mui/material";
import UserCard from "./UserCard";
import UserField from "../../userFields/UserField";
import Grid from '@mui/material/Grid2';


const General = () => {
    return (
        <Box>
            <UserCard />
            <Box>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField label="Birth Date:" data="22.10.1994" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField label="Job Title:" data="Front End Developer" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField label="Gender:" data="Female" />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <UserField label="Company:" data="MAK-System" />
                    </Grid>
                </Grid>

            </Box>
        </Box>);
};

export default General;