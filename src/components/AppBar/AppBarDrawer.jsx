import React , {useEffect} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {Box,Drawer,CssBaseline,IconButton,Divider,Typography,List, ClickAwayListener } from '@mui/material/';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import DrawerListItem from '../drawer_list_item/DrawerListItem';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AppBarDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  useEffect(() => {
      document.addEventListener("mousedown",handleDrawerClose)
    },[] );

  return (
   <> 
    <Box  sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
            <Link to="/" style={{color: "#FFFFFF", textDecoration: "none" }}>
              <Typography variant="h6" noWrap component="div">
                Avicenne Hospital
              </Typography>
            </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <DrawerListItem action={handleDrawerClose} title="Urgences" link="/urgences" color="red" />
          <DrawerListItem action={handleDrawerClose} title="Home" link="/" color="orange" />
          <DrawerListItem action={handleDrawerClose} title="Doctors" link="/doctors" color="black" />
          <DrawerListItem action={handleDrawerClose} title="Consultations" link="/consultations" color="black" />
          <DrawerListItem action={handleDrawerClose} title="Hospitals" link="/hospitals" color="black" />
        </List>

        <Divider />
        <List>
            <DrawerListItem action={handleDrawerClose} title="About" link="/about" color="black" />
            <DrawerListItem action={handleDrawerClose} title="Contact Us" link="/contactus" color="black" />
        </List>
      </Drawer>
      <Main  open={open}>
        <DrawerHeader />
        
      </Main>
      
    </Box>
    </>
  );
}