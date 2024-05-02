import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SecondStep = ({handleNext,formData,setFormData}) => {
  const [inputs,setInputs]=useState({password:"",setPassword:""});

  const handleChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  return (
    <div className='second-step-login'>
      <Box>
        <div style={{ margin: '40px 0px' }}>
          <Typography sx={{ color: '#0057B1', marginBottom: 1 }}>Set Password</Typography>
          <TextField onChange={handleChange} name='password' value={formData.password} sx={{ width: '400px' }} type='password' />
        </div>
        <div style={{ margin: '40px 0px' }}>
          <Typography sx={{ color: '#0057B1', marginBottom: 1 }}>Confirm Password</Typography>
          <TextField onChange={handleChange} name='confirm_password' value={formData.confirm_password} sx={{ width: '400px' }} type='password' />
        </div>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '30px 0px' }}>
        <Button onClick={handleNext} variant='contained' sx={{ bgcolor: '#0057B1', width: 'fit-content' }} >Proceed to next step</Button>
      </Box>
    </div>
  )
}

export default SecondStep;