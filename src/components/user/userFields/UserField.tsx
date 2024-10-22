import { useState, type FC } from "react";
import StyledUserField from "../styled/UserField.styled";
import ActionBtn from "../../UI/Buttons/ActionBtn/ActionBtn";
import { Box, TextField } from "@mui/material";

type UserFieldProps = {
  label: string;
  data: string;
  isUserCard?: boolean;
}


const UserField: FC<UserFieldProps> = ({ label, data, isUserCard }) => {

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const onClickEditHandler = () => {
    setIsEdit(true);
    console.log("working edit");

  }

  const onClickSaveHandler = () => {
    setIsEdit(false);
    console.log("working save");
  }

  return (
    <StyledUserField isUserCard={isUserCard}>
      <p className="label">{label}</p>
      <Box sx={{ position: "relative" }}>
        {
          !isEdit ? (<p className="userData">{data}</p>) : (<TextField />)
        }

        <ActionBtn onClick={!isEdit ? onClickEditHandler : onClickSaveHandler}>{!isEdit ? "Edit" : "Save"}</ActionBtn>
      </Box>
    </StyledUserField>
  );
};

export default UserField;