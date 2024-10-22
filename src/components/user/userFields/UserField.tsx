import { useState, type FC } from "react";
import StyledUserField from "../styled/UserField.styled";
import ActionBtn from "../../UI/Buttons/ActionBtn/ActionBtn";
import { Box} from "@mui/material";
import TextField from '@mui/material/TextField';

type UserFieldProps = {
  label: string;
  data: string;
  isUserCard?: boolean;
  type?: "text" | "number" | "radio" | "date" | "select"; 
}

const UserField: FC<UserFieldProps> = ({ label, data, isUserCard, type }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(data);

  const onClickEditHandler = () => {
    setIsEdit(true);
  }

  const onClickSaveHandler = () => {
    setIsEdit(false);
  }

  return (
    <StyledUserField isUserCard={isUserCard}>
      <p className="label">{label}</p>
      <Box sx={{ position: "relative" }}>
        {
          !isEdit ? (
            <p className="userData">{data}</p>
          ) : (
            <TextField
              type={type}
              id="outlined-basic" variant="outlined"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          )
        }

        <ActionBtn onClick={!isEdit ? onClickEditHandler : onClickSaveHandler}>
          {!isEdit ? "Edit" : "Save"}
        </ActionBtn>
      </Box>

      
    </StyledUserField>
  );
};

export default UserField;
