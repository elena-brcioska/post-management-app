import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { type ComponentPropsWithoutRef, type FC} from 'react';

const Wrapper = styled(Button)(() => ({
  color: "#478CCF",
  fontSize: "1rem",
  padding: "0",
  display: "inline",
  minWidth: "20px",
  marginLeft: "1rem",
  border: "none",
  boxShadow: "none",
  marginRight: "5rem",
  '&:hover': {
    boxShadow: "none",
    textDecoration: "underline"
  },
}));


type WrapperProps = {
isUserCard?: boolean
} & ComponentPropsWithoutRef<"button">

const StyledActionButton: FC<WrapperProps> = ({children, onClick}) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default StyledActionButton;