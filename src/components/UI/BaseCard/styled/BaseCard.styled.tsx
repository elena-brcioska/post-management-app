import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { type ReactNode } from 'react';

const Wrapper = styled(Box)<{ marginBottom?: string }>(({ theme, marginBottom }) => ({
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[7],
  marginBottom: marginBottom || "0",
  
  '& h2': {
    fontSize: '2rem',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  '& p': {
    fontSize: '1.5rem',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(5),
  },

  '& a': {
    background: theme.palette.primary.main,
    padding: "1rem",
    minWidth: "64px",
    fontSize: "1rem",
    fontWeight: "500",
    color: theme.palette.primary.contrastText,
    textTransform: "uppercase",
    textDecoration: "none",
    borderRadius: "18px",
    marginTop: "200px"
  }
}));

interface WrapperProps {
  children: ReactNode;
  marginBottom?: string;
}

const StyledBaseCard: React.FC<WrapperProps> = ({ children, marginBottom }) => {
  return <Wrapper marginBottom={marginBottom}>{children}</Wrapper>;
};

export default StyledBaseCard;
