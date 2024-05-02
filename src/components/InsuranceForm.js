import React from 'react';
import {Box , Typography , TextField , Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const InsuranceForm = () => {
    const navigate=useNavigate();
  return (
    <div className='insurance-form'>
        <Box>
            <Typography variant='h4' sx={{fontSize:'40px' , fontWeight:'600', margin:'10px'}}>Insurance Form</Typography>
        </Box>
        <Box sx={{width:'95%' , padding:'20px'}}>
            <Typography sx={{fontWeight:'bold' , fontSize:'20px'}}>Basic Information</Typography>
        </Box>
        <Box className='basic-information' sx={{display:'flex' , justifyContent:'center' , width:'80%'}}>
            <Box sx={{ width:'100%' , display:'flex' , flexDirection:'column' , gap:'20px'}}>
                <Box>
                    <Typography>Patient Name</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>MRD No.</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>Blood Group</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>Policy ID</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
            </Box>
            <Box sx={{ width:'100%' , display:'flex' , flexDirection:'column' , gap:'20px'}}>
                <Box>
                    <Typography>Gender</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>Age</Typography>
                    <TextField type='number' sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>Date of Birth</Typography>
                    <TextField type='date' sx={{width:'80%'}}/>
                </Box>
            </Box>
        </Box>
        <Box sx={{width:'95%' , padding:'20px'}}>
            <Typography sx={{fontWeight:'bold' , fontSize:'20px'}}>Patient Admission Details</Typography>
        </Box>
        <Box className='basic-information' sx={{display:'flex' , justifyContent:'center' , width:'80%'}}>
            <Box sx={{ width:'100%' , display:'flex' , flexDirection:'column' , gap:'20px'}}>
                <Box>
                    <Typography>Admission Date</Typography>
                    <TextField type='date' sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>Date of Procedure</Typography>
                    <TextField type='date' sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>Visit Code</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
            </Box>
            <Box sx={{ width:'100%' , display:'flex' , flexDirection:'column' , gap:'20px'}}>
                <Box>
                    <Typography>Discharging Status</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>Date of Discharge</Typography>
                    <TextField type='date' sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>Insurer</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
            </Box>
        </Box>
        <Box sx={{width:'95%' , padding:'20px'}}>
            <Typography sx={{fontWeight:'bold' , fontSize:'20px'}}>Treatment Details</Typography>
        </Box>
        <Box className='basic-information' sx={{display:'flex' , justifyContent:'center' , width:'80%'}}>
            <Box sx={{ width:'100%' , display:'flex' , flexDirection:'column' , gap:'20px'}}>
                <Box>
                    <Typography>Surgeon</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>Anesthetist</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>Type of Anesthetist</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>Ward Bed</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>Specialist</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
            </Box>
            <Box sx={{ width:'100%' , display:'flex' , flexDirection:'column' , gap:'20px'}}>
                <Box>
                    <Typography>Procedure Status</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>Diagnosis</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>Name of Procedure</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
                <Box>
                    <Typography>Consultant</Typography>
                    <TextField sx={{width:'80%'}}/>
                </Box>
            </Box>
        </Box>
        <Box sx={{width:'100%' , margin:'20px' , display:'flex' , justifyContent:'space-around'}}>
            <Button>Back</Button>
            <Button variant='contained' onClick={()=>navigate('/document-upload')}>Next</Button>
        </Box>
    </div>
  )
}

export default InsuranceForm;