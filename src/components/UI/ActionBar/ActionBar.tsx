import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import StyledActionBar from "./styled/ActionBar.styled";
import FiltersContainer from "../../filters/FiltersContainer";
import { memo, type FC } from "react";
import { IActionBar } from "./types";

const ActionBar: FC<IActionBar> = memo(({ searchValue, setValue, setSelectedAuthor, selectedAuthor, handleSort }) => {

  return (
    <StyledActionBar>
      <Box className="filters">
        <SearchBar searchValue={searchValue} onChange={setValue} />
        <FiltersContainer handleSort={handleSort} setSelectedAuthor={setSelectedAuthor} selectedAuthor={selectedAuthor} />
      </Box>
      <Box className="new-post">
        <Link to="new">Add New Post</Link>
      </Box>
    </StyledActionBar>
  );
});

export default ActionBar;
