import { ComponentPropsWithoutRef, type FC} from "react";
import StyledBaseCard from "./styled/BaseCard.styled";

type BaseCardProps = {marginBottom?: string} & ComponentPropsWithoutRef<'div'>

const BaseCard: FC<BaseCardProps> = ({children, marginBottom}) => {
  return <StyledBaseCard marginBottom={marginBottom}>
    {children}
  </StyledBaseCard>;
};

export default BaseCard;