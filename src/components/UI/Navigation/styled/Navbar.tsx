import { styled } from '@mui/material/styles';
import ResponsiveAppBar from "../AppBar";
import { Box } from '@mui/material';
import { type ReactNode, type FC } from 'react';

const mediaQuery = (breakpoint: string) => `@media (min-width: ${breakpoint})`;

const Wrapper = styled(Box)(() => ({
    position: "relative",
    zIndex: 2,

    [mediaQuery('600px')]: {
        "& .css-hhdjsd-MuiContainer-root": {
            maxWidth: "100%"
        }
    },

    [mediaQuery('2000px')]: {
        "& .css-hhdjsd-MuiContainer-root": {
            maxWidth: "80%"
        }
    },

}))

type WrapperProps = {
    children: ReactNode,
}

const StyledNavbar: FC<WrapperProps> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
}

const Navbar = () => <StyledNavbar><ResponsiveAppBar /></StyledNavbar>


export default Navbar;