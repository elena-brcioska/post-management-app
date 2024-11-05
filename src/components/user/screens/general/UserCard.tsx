import { Box, Divider } from "@mui/material";
import ProfileImage from "../../userFields/ProfileImage";
import StyledUserCard from "../styled/UserCard.styled";
import BaseCard from "../../../UI/BaseCard/BaseCard";
import UserField from "../../userFields/UserField";
import { useState, type FC } from "react";
import { IUserCard, type IUserProps } from "../../types";
import ActionBtn from "../../../UI/Buttons/ActionBtn/ActionBtn";


const UserCard: FC<IUserProps> = ({ user, onUpdate }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [userCardData, setUserCardData] = useState<IUserCard>(user.userCard);

    const handleFieldChange = (id: string, value: string) => {
        setUserCardData((prevData) => ({
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
            userCard: userCardData
        });
        setIsEdit(false);
    };

    return (
        <BaseCard marginBottom="4rem">
            <StyledUserCard>
                <ProfileImage />

                <Box>
                    <Box className="user-screen-title">
                    <h2>{user.userCard.name}</h2>
                    <ActionBtn onClick={!isEdit ? onClickEditHandler : onClickSaveHandler}>
                        {!isEdit ? "Edit" : "Save"}
                    </ActionBtn>
                    </Box>

                    <Divider />
                    <Box className="info">
                        <Box>
                            <UserField id="emailCard" isUserCard label="email" data={userCardData.emailCard} onChange={handleFieldChange} isEdit={isEdit} />
                        </Box>

                        <Box>
                        <UserField id="role" type="select" options={[
                            {value: "Administrator", label: "Administrator"},
                            {value: "Moderator", label: "Moderator"},
                            {value: "Guest", label: "Guest"}

                        ]} isUserCard data={userCardData.role} onChange={handleFieldChange} isEdit={isEdit} />
                        </Box>
                    </Box>
   

                </Box>

            </StyledUserCard>
        </BaseCard>

    )
};

export default UserCard;