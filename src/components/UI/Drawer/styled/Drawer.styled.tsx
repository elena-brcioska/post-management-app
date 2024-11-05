import { styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';

const Wrapper = styled(Box)(({theme}) => ({
    width: "250",
    position: "relative",
    zIndex: 0,

    "& a": {
      width: "100%",
      textDecoration: "none",
      color: theme.palette.secondary.dark,
    }
}));

type WrapperProps = {
    children: ReactNode;

}

const StyledDrawer: FC<WrapperProps> = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledDrawer;