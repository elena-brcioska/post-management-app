import { type FC } from "react";
import StyledAppContent from "./AppContent.styled";
import { IAppContentProps } from "../types";



const AppContent: FC<IAppContentProps> = ({children, isUser}) => {
  return <StyledAppContent isUser={isUser}>{children}</StyledAppContent>;
};

export default AppContent;