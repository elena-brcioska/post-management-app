import { ComponentPropsWithoutRef, FC } from "react";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/material";

const Wrapper = styled(Box)(({theme}) => ({
    display: "flex",
    gap: theme.spacing(6),
    alignItems: "center",

    "& p": {
        color: theme.palette.secondary.main
    },

    "& div.sort": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2)
    }
}))

type TWrapperProps = ComponentPropsWithoutRef<'div'>

const StyledFiltersContainer: FC<TWrapperProps> = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledFiltersContainer;