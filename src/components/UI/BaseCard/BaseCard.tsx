import { type FC, type ReactNode } from "react";
import StyledBaseCard from "./styled/BaseCard.styled";

type BaseCardProps = {
    children: ReactNode;
}

const BaseCard: FC<BaseCardProps> = ({children}) => {
  return <StyledBaseCard>
    {children}
  </StyledBaseCard>;
};

export default BaseCard;