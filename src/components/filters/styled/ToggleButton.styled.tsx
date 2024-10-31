import { FC, ReactNode } from "react";
import { styled } from '@mui/material/styles';
import { alpha, ToggleButton, ToggleButtonProps } from "@mui/material";

const Wrapper = styled(ToggleButton)(({ theme }) => ({
  backgroundColor: "none",
  color: theme.palette.primary.main,
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.8),
  },
}));

type StyledToggleButtonProps = {
  children: ReactNode;
} & ToggleButtonProps;

const StyledToggleButton: FC<StyledToggleButtonProps> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default StyledToggleButton;
