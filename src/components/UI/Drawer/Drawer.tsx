import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MailIcon from '@mui/icons-material/Mail';
import SchoolIcon from '@mui/icons-material/School';
import StyledDrawer from './styled/Drawer.styled';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <StyledDrawer>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>

          <ListItem disablePadding>
          <Link to="?info=general">
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="General"/>
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
          <Link to="?info=contact">
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact info"/>
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
          <Link to="?info=education">

            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Education"/>
            </ListItemButton>
          </Link>

          </ListItem>

        </List>
        <Divider />
      </Drawer>

    </StyledDrawer>
  );
}
