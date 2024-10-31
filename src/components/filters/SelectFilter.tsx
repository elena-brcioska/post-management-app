import { Box, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import { memo, type FC } from 'react';
import { type ISelectFilter } from './types';

const SelectFilter: FC<ISelectFilter> = memo(({ authors, setSelectedAuthor, selectedAuthor }) => {
  console.log("SelectFilter rendered");



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
          value={selectedAuthor}
          label="Author"
          onChange={handleChange}
        >
          {authors.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
},(prevProps, nextProps) => {
  return JSON.stringify(prevProps.authors) === JSON.stringify(nextProps.authors);
});

export default SelectFilter;
