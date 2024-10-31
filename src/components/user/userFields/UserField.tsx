import { useState, type FC } from "react";
import StyledUserField from "../styled/UserField.styled";
import ActionBtn from "../../UI/Buttons/ActionBtn/ActionBtn";
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { type IUserFieldProps } from "../types";



const UserField: FC<IUserFieldProps> = ({ label, id, data, isUserCard, type, options, onSave }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(data);

  const onClickEditHandler = () => {
    setIsEdit(true);
  };

  const onClickSaveHandler = () => {
    setIsEdit(false);
    onSave(id, inputValue);
  };

  return (
    <StyledUserField isUserCard={isUserCard}>
      <p className="label">{label}</p>
      <Box sx={{ position: "relative" }}>
        {!isEdit ? (
          <p className="userData">{data}</p>
        ) : (
          type === "radio" && options ? (
            <FormControl component="fieldset">
              <RadioGroup
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              >
                {options.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio />}
                    label={option.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          ) : type === "select" && options ? (
            <FormControl fullWidth variant="outlined">
              <InputLabel id={`${id}-label`}>{label}</InputLabel>
              <Select
                labelId={`${id}-label`}
                id={id}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                label={label}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : (
            <TextField
              type={type}
              id={id}
              variant="outlined"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          )
        )}

        <ActionBtn onClick={!isEdit ? onClickEditHandler : onClickSaveHandler}>
          {!isEdit ? "Edit" : "Save"}
        </ActionBtn>
      </Box>
    </StyledUserField>
  );
};

export default UserField;
