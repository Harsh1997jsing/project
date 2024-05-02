import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const ThirdStep = ({handleNext,formData,setFormData}) => {
    const [inputs,setInputs]=useState({firstName:"",lastName:"",mobileNumber:"",hospitalName:""});

    const handleChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    return (
        <div className='third-step-login'>
            <Box>
                <div style={{ margin: '10px 0px' }}>
                    <Typography sx={{ color: '#0057B1', margin: '5px 0px' }}>First Name</Typography>
                    <TextField onChange={handleChange} value={formData.firstName} type='name' name='firstName' sx={{ width: '400px' }} />
                </div>
                <div style={{ margin: '10px 0px' }}>
                    <Typography sx={{ color: '#0057B1', margin: '5px 0px' }}>Last Name</Typography>
                    <TextField onChange={handleChange} type='name' value={formData.lastName} name='lastName' sx={{ width: '400px' }} />
                </div>
                <div style={{ margin: '10px 0px' }}>
                    <Typography sx={{ color: '#0057B1', margin: '5px 0px' }}>Hospital Name</Typography>
                    <TextField onChange={handleChange} type='name' value={formData.hospitalName} name='hospitalName' sx={{ width: '400px' }} />
                </div>
                <div style={{ margin: '10px 0px' }}>
                    <Typography sx={{ color: '#0057B1', margin: '5px 0px' }}>Mobile Number</Typography>
                    <TextField onChange={handleChange} value={formData.mobileNumber} name='mobileNumber' type='number' inputProps={{maxLength: 10}} sx={{ width: '400px'}} />
                </div>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '30px 0px' }}>
                <Button onClick={handleNext} variant='contained' sx={{ bgcolor: '#0057B1', width: 'fit-content' }} >Proceed to next step</Button>
            </Box>
        </div>
    )
}

export default ThirdStep;