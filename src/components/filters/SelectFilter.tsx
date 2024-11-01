import { Box, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import { type ISelectFilter } from './types';

const SelectFilter: FC<ISelectFilter> = ({ authors, setSelectedAuthor, selectedAuthor }) => {


  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as string;
    setSelectedAuthor(value); 
  };

  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="author-select-label">Author</InputLabel>
        <Select
          labelId="author-select-label"
          id="author-select"
          value={selectedAuthor || ""}
          label="Author"
          onChange={handleChange}
        >
          <MenuItem value="" disabled>
            Select an Author
          </MenuItem>
          <MenuItem value="">
            All authors
          </MenuItem>
          {authors.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectFilter;
