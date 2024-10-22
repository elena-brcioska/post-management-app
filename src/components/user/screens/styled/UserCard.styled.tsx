import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FC, type ReactNode } from 'react';

const Wrapper = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "4rem",
    width: "600px",

    "& h2": {
        marginBottom: "0",
        color: theme.palette.secondary.dark
    },

    "& p": {
        fontSize: "1rem",
        margin: "0",
        display: "inline-block"
    },

    "& button": {
        color: "#478CCF",
        fontSize: "0.8rem",
        padding: "0",
        display: "inline",
        minWidth: "20px",
        marginLeft: "1rem"
     },

    "& p span": {
        fontWeight: "600"
    },

    "& div.info": {
        marginTop: "1rem"
    },

    "& div.info div": {
        position: "relative"
    }
}))

type WrapperProps = {
    children: ReactNode,
}

const StyledUserCard: FC<WrapperProps> = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledUserCard;