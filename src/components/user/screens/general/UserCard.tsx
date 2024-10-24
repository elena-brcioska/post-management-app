import { Box, Divider } from "@mui/material";
import ProfileImage from "../../userFields/ProfileImage";
import StyledUserCard from "../styled/UserCard.styled";
import BaseCard from "../../../UI/BaseCard/BaseCard";
import UserField from "../../userFields/UserField";
import { type UserCard as IUserCard } from "../../../../pages/User/types";
import { type FC } from "react";

type UserCardProps = {
    user: IUserCard
}

const UserCard: FC<UserCardProps> = ({ user }) => {

    return (
        <BaseCard>
            <StyledUserCard>
                <ProfileImage />
                <Box>
                    <h2>{user.name}</h2>
                    <Divider />
                    <Box className="info">
                        <Box>
                            <UserField id="emailCard" isUserCard label="email" data={user.email} />
                        </Box>

                        <Box>
                        <UserField id="role" isUserCard label="Role" data={user.role} />
                        </Box>
                    </Box>
                </Box>
            </StyledUserCard>
        </BaseCard>

    )
};

export default UserCard;