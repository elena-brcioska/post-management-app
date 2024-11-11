import { styled } from '@mui/material/styles';
import { forwardRef, type ComponentPropsWithoutRef} from 'react';
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
    marginBottom: "2rem"
  },

    "& .textbox": {
      marginBottom: "2rem",
    },

  "& > div:last-of-type": {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2),
  },

  [mediaQuery('2000px')]: {
    width: "70%",
    margin: "auto"
  },
}));

type StyledFormProps = ComponentPropsWithoutRef<typeof Form>;

const StyledForm = forwardRef<HTMLFormElement, StyledFormProps>(({ children, onSubmit }, ref) => {
  return <Wrapper ref={ref} onSubmit={onSubmit} data-testid="new-post-form">{children}</Wrapper>;
});

export default StyledForm;
