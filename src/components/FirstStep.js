import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const FirstStep = ({handleNext , formData , setFormData}) => {
    const [isOtpSend, setisOtpSend] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '']);
    const [inputs,setInputs] = useState({email:''});

    const handleSendOtp = () => {
        setisOtpSend(true);
        console.log(`OTP has been send to ${inputs}`);
    }

    const handleChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    return (
        <div className='first-step-login'>
            <Typography sx={{ color: '#0057B1' }}>Email Address</Typography>
            <Box sx={{ width: '400px', position: 'relative', display: 'inline-block' }}>
                <TextField onChange={handleChange} type='email' name='email' value={formData.email} sx={{ paddingRight: '40px', width: '100%' }} placeholder='Enter your professional email' />
                <Button onClick={handleSendOtp} sx={{ position: 'absolute', right: '50px', top: 0, bottom: 0, cursor: 'pointer' }}>{isOtpSend ? 'Resend OTP' : 'Send OTP'}</Button>
            </Box>
            <Typography sx={{ color: 'green' }}>{isOtpSend ? 'OTP is send to email' : ''}</Typography>
            {isOtpSend ? <Box sx={{ marginTop: 3 }}>
                <Typography>OTP</Typography>
                {
                    otp.map((value) => (
                        <TextField onChange={handleChange} value={value} sx={{ width: 50, margin: 1 }} />
                    ))
                }
            </Box> : <></>}
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '30px 0px' }}>
                <Button onClick={handleNext} variant='contained' sx={{ bgcolor: '#0057B1', width: 'fit-content' }} >Proceed to Next Step</Button>
                <Typography sx={{marginTop:1}}>Already have a account? <Link to='/login'>Sign In</Link> </Typography>
            </Box>
        </div>
    )
}

export default FirstStep;


{/* <Box sx={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , margin:'30px 0px'}}>
        <Button variant='contained' sx={{bgcolor:'#0057B1' , width:'fit-content'}} >Go To Home</Button>
</Box> */}