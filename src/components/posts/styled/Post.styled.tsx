import { styled } from '@mui/material/styles';
import { Box } from "@mui/material";
import { type ComponentPropsWithoutRef, type FC } from "react";

const Wrapper = styled(Box)(({ theme }) => ({

  transition: 'transform 0.2s',

  '&:hover': {
    transform: 'scale(1.02)',
  },


  '& img': {
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
  },

  '& p': {
    fontSize: '1.2rem',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(3),
  },

  '& > div': {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),
  },

  '& > div p': {
    color: theme.palette.secondary.main,
    fontSize: "1rem",
  },

  '& a': {


    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main
    },
  },
}));

type TWrapperProps = ComponentPropsWithoutRef<'div'>;

const StyledPost: FC<TWrapperProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default StyledPost;
