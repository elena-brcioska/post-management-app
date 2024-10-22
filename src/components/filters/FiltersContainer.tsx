import { Box } from "@mui/material";
import StyledFiltersContainer from "./styled/FiltersContainer.styled";
import { Link } from "react-router-dom";

const FiltersContainer = () => {
  return <StyledFiltersContainer>
    <Box className="filters">
    <Box>
    <h2>This is filters</h2>

    </Box>

    <Box>
    <Link to="new">Add New Post</Link>
    </Box>
    </Box>

  </StyledFiltersContainer>;
};

export default FiltersContainer;