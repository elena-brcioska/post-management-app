import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledHeader = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(2, 0),
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: theme.palette.background.default,
    marginBottom: theme.spacing(4),

}));
