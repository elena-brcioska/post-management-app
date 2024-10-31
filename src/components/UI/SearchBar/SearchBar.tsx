import StyledSearchField from './styled/SearchBar.styled';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { FC } from 'react';
import { ISearchField } from './types';


const SearchBar: FC<ISearchField> = ({ searchValue, onChange }) => {
  return (
    <div>
      <StyledSearchField>
        <div className="search-icon">
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          className="input-base"
          onChange={onChange}
          value={searchValue}
          autoFocus
        />
      </StyledSearchField>
    </div>
  );
}

export default SearchBar;