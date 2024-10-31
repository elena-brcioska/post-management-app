import { Box, Divider } from "@mui/material";
import ProfileImage from "../../userFields/ProfileImage";
import StyledUserCard from "../styled/UserCard.styled";
import BaseCard from "../../../UI/BaseCard/BaseCard";
import UserField from "../../userFields/UserField";
import { useState, type FC } from "react";
import { type IUserCard, type IUserCardProps } from "../../types";


const UserCard: FC<IUserCardProps> = ({ user, onUpdate }) => {

    const [card, setCard] = useState<IUserCard>(user);

    const handleUpdate = (id: string, value: string) => {
        setCard((prev) => {
        const updatedCard = { ...prev, [id]: value };
        onUpdate(updatedCard);
        return updatedCard;
      });
    };

    return (
        <BaseCard>
            <StyledUserCard>
                <ProfileImage />
                <Box>
                    <h2>{card.name}</h2>
                    <Divider />
                    <Box className="info">
                        <Box>
                            <UserField id="emailCard" isUserCard label="email" data={card.emailCard} onSave={handleUpdate} />
                        </Box>

                        <Box>
                        <UserField id="role" type="select" options={[
                            {value: "Administrator", label: "Administrator"},
                            {value: "Moderator", label: "Moderator"},
                            {value: "Guest", label: "Guest"}

                        ]} isUserCard data={card.role} onSave={handleUpdate} />
                        </Box>
                    </Box>
                </Box>
            </StyledUserCard>
        </BaseCard>

    )
};

export default UserCard;