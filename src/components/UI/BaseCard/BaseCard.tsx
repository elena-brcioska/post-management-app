import { ComponentPropsWithoutRef, type FC} from "react";
import StyledBaseCard from "./styled/BaseCard.styled";

type BaseCardProps = ComponentPropsWithoutRef<'div'>

const BaseCard: FC<BaseCardProps> = ({children}) => {
  return <StyledBaseCard>
    {children}
  </StyledBaseCard>;
};

export default BaseCard;