import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ComponentPropsWithoutRef, FC } from 'react';


const Wrapper = styled(Box)(() => ({
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"


}))

type WrapperProps = ComponentPropsWithoutRef<"div">

const StyledLoader: FC<WrapperProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledLoader;