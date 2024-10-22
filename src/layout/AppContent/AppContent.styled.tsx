import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { FC, ReactNode } from 'react';

const StyledWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isUser',
})<{ isUser?: boolean }>(({ theme, isUser }) => ({
  background: theme.palette.background.default,
  width: '80%',
  margin: isUser ? '4rem auto' : '10rem auto',

  '& h1': {
    fontSize: theme.typography.h1.fontSize,
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(2),
  },

  '& h2': {
    color: theme.palette.secondary.dark,
    marginBottom: theme.spacing(2),
  },
}));

type StyledAppContentProps = {
  children: ReactNode;
  isUser?: boolean;
};

const StyledAppContent: FC<StyledAppContentProps> = ({ children, isUser }) => {
  return <StyledWrapper isUser={isUser}>{children}</StyledWrapper>;
};

export default StyledAppContent;
