import React from 'react';
import {Box, Button, Input,TextField,Typography} from '@mui/material';

const HospitalFirstForm = () => {

    const steps=['Organization Images','Organization Details']
  return (
    <div style={{margin:'20px 30px'}}>
        <Box sx={{width:'80%' , display:'flex' , flexDirection:'column' , gap:'70px' , height:'fit-content' , padding:'20px' , margin:'0 auto' , marginTop:'30px'}}>
        <div>
            <Typography>Cover Image</Typography>
            <TextField type='file' label="" sx={{width:'98%' , border:'none' , marginTop:'10px'}}/>
        </div>
        <div>
            <Typography>Hospital Logo</Typography>
            <TextField type='file' sx={{width:'98%' , textAlign:'center' , border:'none' , textDecoration:'none' , borderRadius:'50%' , marginTop:'10px'}}/>
        </div>
        </Box> 
    </div>
  )
}

export default HospitalFirstForm;

//<Button variant='contained' sx={{color:'white' ,backgroundColor:'#0057B1' ,position:'absolute' , bottom:0 , right:0 }}>Proceed to Next Step <ArrowForwardIcon></ArrowForwardIcon> </Button>