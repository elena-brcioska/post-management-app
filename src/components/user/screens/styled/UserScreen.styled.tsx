import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { type FC, type ReactNode } from 'react';

const Wrapper = styled(Box)(() => ({

 
    "& div.user-screen-title" : {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }

}))

type WrapperProps = {
    children: ReactNode,
}

const StyledUserScreen: FC<WrapperProps> = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledUserScreen;