import React,{useEffect, useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, Button, Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import HelpIcon from '@mui/icons-material/Help';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GradingIcon from '@mui/icons-material/Grading';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {authActions} from '../store/index';
import { useDispatch } from 'react-redux';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function NavBar() {
  const [selectedIndex,setSelectedIndex]=useState(null);

  const [anchorEl,setAnchorEl]=useState(null);

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const Open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userName=localStorage.getItem('userName');

  const navigate=useNavigate();
  const dispatch=useDispatch()

  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  console.log(isLoggedIn);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handelLogOut=()=>{
    dispatch(authActions.logout())
    navigate('/register')
    setOpen(!open)
  }

  useEffect(()=>{
    document.body.style.backgroundColor='rgb(233, 233, 233)'
  },[]);

  const icons=[
    {icon: AdminPanelSettingsIcon , name :'Admin Panel'},
    {icon : DashboardIcon , name :'Dashboard'},
    {icon : GradingIcon , name :'Claim'},
    {icon : MessageIcon , name :'Message'},
    {icon : SmartToyIcon , name :'Chatbot'},
    {icon : HelpIcon , name : 'Help'}
  ]

  const listItemHoverStyles = {
    '&:hover': {
      backgroundColor: '#0057B1', 
      color: 'white',
      fontWeight:600
    },
  };

  const listItemStyles={
    ...listItemHoverStyles,
    '&-selected':{
      backgroundColor:'#e0f7fa',
      color:'#01579b'
    }
  }

  const handleListItemClick=(value)=>{
    setSelectedIndex(value)
  }

  return (
    <Box sx={{ display: 'flex' , bgcolor:'grey'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{bgcolor:"#0057B1"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight:1,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {!open && <Typography onClick={() => navigate('/')} sx={{ color:'orange' , fontWeight: '800', cursor: 'pointer', textTransform: 'uppercase' }} variant="h5">SHOVEL</Typography>}
          <Box sx={{position:'absolute' , right:15 , display:'flex' , gap:'10px'}}>
            {!isLoggedIn && <> <Button LinkComponent={Link} to='/register' variant='contained' color='warning'>Register</Button>
            <Button LinkComponent={Link} to='/login' variant='contained' color='warning'>Login</Button></>}
            {isLoggedIn && 
            <>
              <Box>
                <Tooltip title='Account Setting'>
                  <IconButton onClick={handleClick}>
                    <Avatar>{userName.split('')[0]}</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu anchorEl={anchorEl} open={Open} onClose={handleClose} onClick={handleClose} PaperProps={{ elevation:0, sx:{padding:'0px 20px' , overflow:'visible' , mr:5}}}>
                <MenuItem><Button>Profile</Button></MenuItem> 
                <MenuItem><Button>Setting</Button></MenuItem>
                <MenuItem><Button onClick={handelLogOut}>Logout</Button></MenuItem>
              </Menu>
            </>}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Paper sx={{height:'100%' , bgcolor:'azure'}}>
        <DrawerHeader sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between' , padding:'5px'}}> 
          <img src='\images\shovel_ogo.jpeg' style={{width:'200px' , height:'50px' , objectFit:'contain' }}></img>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon /> }
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{height:'500px' , display:'flex' , flexDirection:"column" , gap:'20px' , marginTop:'20px'}}>
          {icons.map((item,index)=>(
            <ListItem button selected={selectedIndex === index} onClick={()=>handleListItemClick(index)} sx={listItemStyles} key={item.name} disablePadding>  
                <ListItemButton LinkComponent={Link} to={`/${item.name.toLowerCase()}`}>
                  <Tooltip title={item.name}>
                    <ListItemIcon>
                        <item.icon/>
                    </ListItemIcon>
                    </Tooltip>
                    <ListItemText primary={item.name}/>
                </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider/>
        {open && <Box sx={{display:'flex' , flexDirection:'row'}}>
          <Button onClick={handelLogOut}><IconButton> <LogoutIcon></LogoutIcon> </IconButton> Log out</Button>
        </Box>}
        </Paper>
      </Drawer>
    </Box>
  );
}