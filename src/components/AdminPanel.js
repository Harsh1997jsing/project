import React, { useState } from 'react';
import {Box , Typography , Button , TextField , Tabs , Tab} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AdminPanel = () => {
  const [value,setValue]=useState(0);
  const [formOpen,setFormOpen]=useState(false);
  const [selectedValue,setSelectedValue]=useState('admin');

  const handleChange=(e)=>{
    setSelectedValue(e.target.value);
  }

  const toggleForm=()=>{
    setFormOpen(!formOpen)
  }

  const userName=localStorage.getItem('userName');

  return (
    <div style={{position:'relative'}}>
      <Box sx={{ width:'80%' , margin:'0 auto' , marginTop:'100px' , padding:'10px' , display:'flex' , justifyContent:'space-between' , alignItems:'center' , bgcolor:'azure' , border:'1px solid #ddd'}}>
        <Box>
          <Typography sx={{fontWeight:'600' , fontSize:'20px'}}>Users</Typography>
          <Typography>Owner : {userName}</Typography>
        </Box>
        <Box>
          <Button onClick={toggleForm} variant='contained' sx={{bgcolor:'#0057B1' , display:'flex' , gap:1 , alignItems:'center' , fontWeight:'600'}}><AddCircleOutlineIcon/>Add Users</Button>
        </Box>
      </Box>
      <Box sx={{width:'80%' , height:'300px' , margin:'0 auto' , marginTop:'10px'}}>
        <Box sx={{marginTop:'20px'}}>
        <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
          <Tab sx={{fontWeight:'600'}} label='Approved'/>
          <Tab sx={{fontWeight:'600'}} label='Request'/> 
        </Tabs>
        </Box>
        <Box sx={{ width:'100%' , height:'200px' , marginTop:'10px'}}>
          <table className='admin-table'>
            <tr>
              <th className='admin-table-header'>Users</th>
              <th className='admin-table-header'>Status</th>
              <th className='admin-table-header'>Access</th>
              <th className='admin-table-header'>Actions</th>
            </tr>
            <tr>
              <td className='admin-table-data'>{userName} <Typography variant='contained' sx={{bgcolor:'grey' , padding:'5px 15px' , borderRadius:'10px' , textAlign:'center'}}>Owner</Typography> </td>
              <td className='admin-table-data'>Active</td>
              <td className='admin-table-data'>Admin</td>
              <td className='admin-table-data'>Action</td>
            </tr>
          </table>
        </Box>
      </Box>
      {formOpen ? 
      <Box>
        <form className='admin-form'>
          <Box sx={{width:'99.5%' , height:'50px' , border:'1px solid #ddd'}}>
          <Typography sx={{fontWeight:'600' , fontSize:'20px' , margin:'10px'}}>Add User</Typography>
          </Box>
          <Box sx={{marginTop:'10px'}}>
            <Typography sx={{fontWeight:'600' , margin:'10px 0px'}}>Email Addresses</Typography>
            <TextField sx={{width:'99%'}} placeholder='user@test.com'/>
          </Box>
          <Box>
            <Typography sx={{fontWeight:'600' , margin:'10px 0px'}}>What level of access would you like to provide?</Typography>
            <Box>
              <Button>Default</Button>
            </Box> 
            <Box sx={{display:'flex' , flexDirection:'column' , gap:'10px'}}>
              <label>
                <input value='admin' checked={selectedValue === 'admin'} onChange={handleChange} type='radio'/>
                Admin 
              </label>
              <label>
                <input value='custom' checked={selectedValue === 'custom'} onChange={handleChange} type='radio'/>
                Access Level
              </label>
            </Box>
          </Box>
          <Box sx={{position:'absolute' , bottom:20 , right:20 , display:'flex' , gap:'15px'}}>
              <Button onClick={toggleForm}>Cancel</Button>
              <Button sx={{bgcolor:'#0057B1'}} variant='contained'>Save and notify message</Button>
          </Box>
        </form>
      </Box> : <></>}
    </div>
  )
}

export default AdminPanel;