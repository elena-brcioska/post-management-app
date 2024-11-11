import { CircularProgress } from "@mui/material";
import StyledLoader from "./styled/Loading.styled";

const Loading = () => {
  return (
    <StyledLoader>
    <CircularProgress />
    </StyledLoader>
  );
};

export default Loading;