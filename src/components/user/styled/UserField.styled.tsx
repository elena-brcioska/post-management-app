import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { type FC, type ReactNode } from 'react';

type WrapperProps = {
  children: ReactNode;
  isUserCard?: boolean;
};

const Wrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isUserCard',
})<WrapperProps>(({ theme, isUserCard }) => ({
  width: '85%',
  margin: isUserCard ? "0" :  '1.5rem 0',

  '& p.userData': {
    background: isUserCard ? "none" : "#ffffff",
    borderBottom: isUserCard ? "none" : `1px solid ${theme.palette.secondary.main}`,
    padding: isUserCard ? "0" : '0.6rem',
    marginTop: isUserCard ? "0" : '0.6rem',
    position: 'relative',
  },

  '& p.label': {
    display: isUserCard ? "none" : "block"
  },

  '& input': {
    height: '1rem',
  },

  '& fieldset': {
    // background: '#ffffff',
  },

  '.css-1xp5r68-MuiFormControl-root-MuiTextField-root': {
    width: '100%',
  },

}));

const StyledUserField: FC<WrapperProps> = ({ children, isUserCard }) => {
  return <Wrapper isUserCard={isUserCard}>{children}</Wrapper>;
};

export default StyledUserField;
