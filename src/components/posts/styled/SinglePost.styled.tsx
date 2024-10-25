import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { type ReactNode, type FC } from "react";

const mediaQuery = (breakpoint: string) => `@media (min-width: ${breakpoint})`;

const Wrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "16px",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  marginBottom: "16px",

  [mediaQuery("600px")]: {
    flexDirection: "row",
  },

  "& img": {
    flex: "1",
    marginRight: "16px",
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },

  "& .content": {
    flex: "2",
  },

  "& .title": {
    fontSize: "1.5rem",
    marginBottom: "8px",
  },

  "& .description": {
    fontSize: "1rem",
    marginBottom: "16px",
  },

  "& .author": {
    fontSize: "0.875rem",
    color: "gray",
    marginBottom: "16px",
  },

  "& .button-container": {
    display: "flex",
    gap: "8px",
  },
});

interface StyledSinglePostProps {
  children: ReactNode
}

const StyledSinglePost: FC<StyledSinglePostProps> = ({ children }) => {
  return (
    <Wrapper>
        {children}
    </Wrapper>
  );
};

export default StyledSinglePost;
