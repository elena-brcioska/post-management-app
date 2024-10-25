import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { type ComponentPropsWithoutRef, type FC} from 'react';

const Wrapper = styled(Button)(() => ({

    color: "#478CCF",
    fontSize: "0.8rem",
    padding: "0",
    display: "inline",
    minWidth: "20px",
    marginLeft: "1rem",
    position: "absolute",
    top: "50%",
    right: "1rem",
    transform: "translateY(-50%)" 
}))

type WrapperProps = {
isUserCard?: boolean
} & ComponentPropsWithoutRef<"button">

const StyledActionButton: FC<WrapperProps> = ({children, onClick}) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

export default StyledActionButton;