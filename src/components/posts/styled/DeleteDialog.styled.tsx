import { styled } from '@mui/material/styles';
import { Box } from "@mui/material";
import { type ComponentPropsWithoutRef, type FC } from "react";

const Wrapper = styled(Box)(({theme}) => ({
    
    padding: theme.spacing(5),

    "& p": {
        color: theme.palette.secondary.dark,
        marginBottom: theme.spacing(6),
        fontSize: "20px"
    },

    "& .action-buttons": {
        display: "flex",
        justifyContent: "flex-end",
        gap: theme.spacing(2)
    },

}))

type WrapperProps = ComponentPropsWithoutRef<'div'> 
const StyledDeleteDialog: FC<WrapperProps> = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledDeleteDialog;