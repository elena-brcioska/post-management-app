import { Typography } from '@mui/material';
import { StyledHeader } from './styled/Header.styled';
import { type FC, type ReactNode } from 'react';
import { type IHeaderProps } from './types';

const Header: FC<IHeaderProps> = ({ searchQuery, selectedAuthor, totalCount }) => {
    let displayText: string | ReactNode = (<Typography variant="h1" gutterBottom>Latest Posts</Typography>)
  
    if (searchQuery) {
      displayText = (<Typography variant="body1" gutterBottom>Showing {totalCount} results for "{searchQuery}"</Typography>);
    } else if (selectedAuthor) {
      displayText = (<Typography variant="body1" gutterBottom>Showing {totalCount} articles by {selectedAuthor}</Typography>);
    }

    return (
      <StyledHeader>
        {displayText}
        {
            !searchQuery && !selectedAuthor && (<Typography variant="h6" color="textSecondary">Discover our latest articles and updates.</Typography>)
        }
      </StyledHeader>
    );
  };

export default Header;
