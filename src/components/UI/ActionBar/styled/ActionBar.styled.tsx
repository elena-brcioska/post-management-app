import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { type ReactNode } from 'react';

const mediaQuery = (breakpoint: string) => `@media (min-width: ${breakpoint})`;


const Wrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.light,
  borderRadius: "0",
  boxShadow: theme.shadows[5],
  display: "flex",
  justifyContent: "space-between",
  margin: "auto",
  position: "fixed",
  width: "100%",
  top: "4rem",
  zIndex: 1,

  '& a': {
    background: theme.palette.primary.main,
    padding: "8px 16px",
    minWidth: "64px",
    fontSize: "0.875rem",
    fontWeight: "500",
    color: theme.palette.primary.contrastText,
    textTransform: "uppercase",
    textDecoration: "none",
    borderRadius: "18px"
  },

  "& div.filters": {
    display: "flex",
    gap: "24px",
    alignItems: "center"
  },

  "& div.new-post": {
    display: "flex",
    alignItems: "center"
  },

  [mediaQuery('2000px')]: {
    "& div.filters": {
    width: "80%",
    }
  },

}));

interface WrapperProps {
  children: ReactNode;
}

const StyledActionBar: React.FC<WrapperProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledActionBar;
