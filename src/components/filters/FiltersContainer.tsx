import { Box, Typography } from "@mui/material";
import SortButton from "./SortButton";
import StyledFiltersContainer from "./styled/FiltersContailer.styled";
import SelectFilter from "./SelectFilter";
import { FC, memo, useMemo } from "react";
import useAuthors from "../../hooks/posts/useAuthors";
import { IFiltersContainer } from "./types";

const FiltersContainer: FC<IFiltersContainer> = memo(({ setSelectedAuthor, handleSort, selectedAuthor }) => {

    const { authors, isLoading, isError } = useAuthors();

    const uniqueAuthors = useMemo(() => {
        return authors ? Array.from(new Set(authors)) : [];
    }, [authors]);

    if (isLoading) return <div>Loading authors...</div>;
    if (isError) return <div>Error loading authors</div>;

    return (
        <StyledFiltersContainer>
            <Box className="sort">
                <Typography variant="subtitle1" component="p">Sort By Date: </Typography>
                <SortButton handleSort={handleSort} />
            </Box>

            <SelectFilter authors={uniqueAuthors} setSelectedAuthor={setSelectedAuthor} selectedAuthor={selectedAuthor} />
        </StyledFiltersContainer>
    );
});

export default FiltersContainer;
