import { FC, type ReactNode } from "react";
import StyledAppContent from "./AppContent.styled";

type AppContentProps = {
    children: ReactNode,
    isUser?: boolean
}

const AppContent: FC<AppContentProps> = ({children, isUser}) => {
  return <StyledAppContent isUser={isUser}>{children}</StyledAppContent>;
};

export default AppContent;