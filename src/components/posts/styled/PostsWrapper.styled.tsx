import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { type FC, type ReactNode } from "react";

const mediaQuery = (breakpoint: string) => `@media (min-width: ${breakpoint})`;

const Wrapper = styled(Box)(() => ({
    width: "60%",
    margin: "auto",

    "& li": {
      listStyle: "none",
      marginBottom: "4rem"
    },

  [mediaQuery('2000px')]: {
    width: "40%"
  },

}))

interface WrapperProps {
    children: ReactNode;
  }

const StyledPostsWrapper: FC<WrapperProps> = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledPostsWrapper;