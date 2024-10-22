import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { type ReactNode } from 'react';

const Wrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[7],
  
  '& h2': {
    fontSize: '2rem',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  '& p': {
    fontSize: '1.5rem',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  },
  '& img': {
    width: '100%',
  },
}));

interface WrapperProps {
  children: ReactNode;
}

const StyledBaseCard: React.FC<WrapperProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledBaseCard;
