import { styled, alpha } from '@mui/material/styles';
import { ComponentPropsWithoutRef, FC } from 'react';

const mediaQuery = (breakpoint: string) => `@media (min-width: ${breakpoint})`;

const StyledSearchFieldWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  width: "70%",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.65),
  transition: theme.transitions.create(['background-color', 'width'], {
    duration: theme.transitions.duration.short,
  }),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.75),
  },
  '&:focus-within': {
    backgroundColor: alpha(theme.palette.common.white, 1),
    width: "100%",  
  },
  marginLeft: 0,

  '& .search-icon': {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '& .input-base': {
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [mediaQuery('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  },

  [mediaQuery('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

type WrapperProps = ComponentPropsWithoutRef<'div'>;

const StyledSearchField: FC<WrapperProps> = ({ children }) => {
  return (
    <StyledSearchFieldWrapper>
      {children}
    </StyledSearchFieldWrapper>
  );
};

export default StyledSearchField;
