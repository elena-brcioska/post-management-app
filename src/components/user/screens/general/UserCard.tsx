import { Box, Divider } from "@mui/material";
import ProfileImage from "../../userFields/ProfileImage";
import StyledUserCard from "../styled/UserCard.styled";
import BaseCard from "../../../UI/BaseCard/BaseCard";
import UserField from "../../userFields/UserField";

const UserCard = () => {

    return (
        <BaseCard>
            <StyledUserCard>
                <ProfileImage />
                <Box>
                    <h2>Elena Brchioska</h2>
                    <Divider />
                    <Box className="info">
                        <Box>
                            <UserField isUserCard label="email" data="elena@elena.com" />
                        </Box>

                        <Box>
                        <UserField isUserCard label="Role" data="Administrator" />
                        </Box>
                    </Box>
                </Box>
            </StyledUserCard>
        </BaseCard>

    )
};

export default UserCard;