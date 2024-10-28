import { styled } from '@mui/material/styles';
import { type ReactNode, forwardRef } from 'react';

const StyledDialog = styled('dialog')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    color: '#edeaf3',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[7],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '500px', // Adjust as needed
    width: '90%', // Responsive width
    backdropFilter: 'blur(5px)',
    '&::backdrop': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },

    "& form": {
        width: "100% !important",
    },
    
  }));
type WrapperProps = {
  children: ReactNode;
  onClose: () => void;
};

const StyledModal = forwardRef<HTMLDialogElement, WrapperProps>(({ children, onClose }, ref) => {
  return <StyledDialog ref={ref} onClose={onClose}>{children}</StyledDialog>;
});

export default StyledModal;
