import React from 'react';
import {Box , Typography , TextField , Button , Input} from '@mui/material';
const UploadDocument = () => {
  return (
    <div style={{marginTop:'100px' , marginLeft:'90px'}}>
        <Box sx={{ width:'70%' , height:'500px' , margin:'0 auto' , marginTop:'20px'}}>
            <Box>
                <Typography sx={{fontWeight:'bold'}}>Upload Document</Typography>
            </Box>
            <Box sx={{width:'90%' , borderRadius:'10px' , bgcolor:'rgb(240, 240, 240)' , height:'400px' , margin:'0 auto' , marginTop:'10px' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
                <Box>
                    <TextField type='file'/>
                </Box>
            </Box>
            <Box sx={{ width:'90%' , margin:'0 auto' , display:'flex' , justifyContent:'center'}}>
                <Button variant='contained' sx={{bgcolor:'#0057B1' , color:'white' , width:'90%' , marginTop:'10px'}}>Upload Document</Button>
            </Box>
        </Box>
        <Box sx={{ width:'70%' , height:'250px' , margin:'0 auto' , marginTop:'20px'}}>
            <Box>
                <Typography sx={{fontWeight:'bold'}}>Note</Typography>
            </Box>
            <Box sx={{width:'90%' , bgcolor:'rgb(240, 240, 240)' , height:'200px' , margin:'0 auto' , marginTop:'10px'}}> 
                <Input sx={{width:'100%' , height:'100%'}}/>
            </Box>
        </Box>
        <Box sx={{width:'70%' , margin:'0 auto' , marginTop:'10px' , display:'flex' , justifyContent:'space-around'}}>
            <Button>Back</Button>
            <Button variant='contained' sx={{bgcolor:'#0057B1'}}>Submit</Button>
        </Box>
    </div>
  )
}

export default UploadDocument;