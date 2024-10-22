import { ComponentPropsWithoutRef, type FC} from "react";
import StyledActionButton from "./styled/ActionBtn.styled";

type ActionBtnProps = ComponentPropsWithoutRef<"button">

const ActionBtn: FC<ActionBtnProps> = ({children, onClick}) => {
  return <StyledActionButton onClick={onClick}>{children}</StyledActionButton>;
};

export default ActionBtn;