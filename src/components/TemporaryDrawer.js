import React , {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import {useSelector , useDispatch} from 'react-redux';
import {authActions} from '../store';
import {Link, useNavigate} from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import HelpIcon from '@mui/icons-material/Help';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GradingIcon from '@mui/icons-material/Grading';

export default function TemporaryDrawer() {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  const [open, setOpen] = useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogOut=()=>{
    dispatch(authActions.logout()) 
    navigate('/register')
  }

  //href={`/${item.name.toLowerCase()}`}

  const icons=[
    {icon: AdminPanelSettingsIcon , name :'Admin Panel'},
    {icon : DashboardIcon , name :'Dashboard'},
    {icon : GradingIcon , name :'Claim'},
    {icon : MessageIcon , name :'Message'},
    {icon : HelpIcon , name : 'Help'}
  ]

  const DrawerList = (
    <Box sx={{ width: 250 , height:400 , marginTop:9 }} role="presentation" onClick={toggleDrawer(false)}>
      <img className='company-logo2' src='\images\shovel_ogo.jpeg' alt='company-logo'/>
      <hr/>
      <List sx={{marginBottom:30}}>
        {icons.map((item,index)=>(
          <ListItem key={item.name} disablePadding>
            <ListItemButton LinkComponent={Link} to={`/${item.name.toLowerCase()}`}>
              <ListItemIcon>
                <item.icon/>
              </ListItemIcon>
              <ListItemText primary={item.name}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <hr/>
      <Box sx={{display:'flex' , flexDirection:'row'}}>
      <Button onClick={handleLogOut}><IconButton> <LogoutIcon></LogoutIcon> </IconButton> Log out</Button>
      </Box>
    </Box>
  );

  return (
    <div>
      <Button sx={{color:'white'}} onClick={toggleDrawer(true)}><IconButton><MenuIcon/></IconButton></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}