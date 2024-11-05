import { ChangeEvent, useState, type FC } from "react";
import StyledUserField from "../styled/UserField.styled";
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel, Radio, SelectChangeEvent } from "@mui/material";
import { type IUserFieldProps } from "../types";



const UserField: FC<IUserFieldProps> = ({ label, id, data, isUserCard, type, options, isEdit, onChange }) => {
  const [inputValue, setInputValue] = useState<string>(data);


  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
      onChange?.(id, newValue);
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          )
        )}


      </Box>
    </StyledUserField>
  );
};

export default UserField;
