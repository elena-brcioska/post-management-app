import { styled } from '@mui/material/styles';
import { FC, ReactNode } from 'react';
import { Form } from 'react-router-dom';

const mediaQuery = (breakpoint: string) => `@media (min-width: ${breakpoint})`;

const Wrapper = styled(Form)(({ theme }) => ({
  padding: theme.spacing(6),

  "& div": {
    display: "block",
  },

  "& p": {
    fontSize: "0.8rem",
  },

  "& input": {
    display: "block",
    width: "100%",
  },

  "& > div:last-of-type": {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2),
  },

  [mediaQuery('2000px')]: {
    width: "40%",
    margin: "auto"
  },
}));

type StyledFormProps = {
  children: ReactNode;
};

const StyledForm: FC<StyledFormProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledForm;
