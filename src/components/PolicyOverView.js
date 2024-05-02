import { Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useNavigate} from 'react-router-dom';

const PolicyOverView = () => {
    const navigate=useNavigate();
  return (
    <div style={{backgroundColor:'rgb(245, 245, 245)' , width:'94%' , height:'100vh' , margin:'0 auto' , marginTop:'10px',
                display:'flex' , flexDirection:'column' , padding:"20px"}}>
        <Typography sx={{margin:'10px' , fontWeight:'600' , fontSize:'28px'}}>Policy Overview</Typography>
        <Box sx={{bgcolor:'white' , width:'90%' , margin:'0 auto' , marginTop:'20px' , padding:'20px' ,
                display:'flex' , flexDirection:'column' , alignItems:'center' , justifyContent:'center' , gap:'10px'}}>
            <Box sx={{width:'95%' , bgcolor:'#EFF7FF' , height:'30%' , display:'flex' , padding:'10px' , alignItems:'center' , gap:'10px'}}>
                <img className='policy-user-photo' src='\images\Shubman_Gill.jpg' alt='user-photo'/>
                <Typography sx={{fontWeight:'600' , fontSize:'24px'}}>Shubman Gill</Typography>
            </Box>
            <Box sx={{width:'95%' , height:'30%'}}>
                <Typography sx={{fontWeight:'600' , fontSize:'24px' , color:"#0057B1"}}>Policy Details</Typography>
                <table className='policy-overview-table'>
                    <tr>
                        <th>Contract Type</th>
                        <th>Policy ID</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Policy Company</th>
                    </tr>
                    <tr>
                        <td className='overview-data-cell'>Yearly</td>
                        <td className='overview-data-cell'>#415263</td>
                        <td className='overview-data-cell'>12/12/2023</td>
                        <td className='overview-data-cell'>12/12/2024</td>
                        <td className='overview-data-cell'>Tata Health Care</td>
                    </tr>
                </table>
            </Box>
            <Box sx={{width:'95%'}}> 
                <Typography sx={{fontWeight:'600' , fontSize:'24px' , color:"#0057B1"}}>Policy Holder Details Box</Typography>
                <table className='policy-overview-table'>
                    <tr>
                        <th>Full Name</th>
                        <th>Birth Date</th>
                        <th>Gender</th>
                        <th>Mobile No.</th>
                        <th>E-mail Address</th>
                        <th>Policy Company</th>
                    </tr>
                    <tr>
                        <td className='overview-data-cell'>Saumil Diwakar</td>
                        <td className='overview-data-cell'>12/12/1997</td>
                        <td className='overview-data-cell'>Male0</td>
                        <td className='overview-data-cell'>8574968574</td>
                        <td className='overview-data-cell'>Saumil@test.com</td>
                        <td className='overview-data-cell'>Tata Health Care</td>
                    </tr>
                </table>
            </Box>
            <Box sx={{width:'95%' , display:'flex' , alignItems:'center' , justifyContent:'space-around' , marginTop:"30px"}}>
                <Button variant='contained' sx={{bgcolor:'#FFFFFF' , color:'black' , gap:'10px'}}><ArrowBackIosNewIcon/>Back</Button>
                <Button onClick={()=>navigate('/insurance-form')} variant='contained' sx={{bgcolor:'#0057B1' , gap:'10px'}}>Next<ArrowForwardIosIcon/></Button>
            </Box>
        </Box>
    </div>
  )
}

export default PolicyOverView;