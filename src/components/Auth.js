import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FinalStep from './FinalStep';
import { Link } from 'react-router-dom';

const Auth = () => {
    const [email, setEmail] = useState();
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isOtpSend, setisOtpSend] = useState(false);
    const [currentStep, setcurrentStep] = useState(1);
    const [formStep, setFormStep] = useState(0);

    const proceedForm = () => {
        setFormStep(curr => curr + 1)
    }

    const renderButton = () => {
        if (formStep > 2) {
            return undefined
        }
        else {
            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <button onClick={proceedForm} className='proceed-btn'>Proceed to Step 2 <ArrowForwardIcon /> </button>
                    <button style={{ fontWeight: '400', fontSize: '15px', background: 'none', border: 'none', marginTop: '10px', cursor: 'pointer' }}>Already have a account? <Link to='/login'>Sign In</Link></button>
                </Box>
            )
        }
    }

    // const steps=[
    //     "Account",
    //     "Set Password",
    //     "Personal Details"
    // ];

    // const displaySteps=(step)=>{
    //     switch(step){
    //         case 1:
    //             return <Account/>
    //         case 2:
    //             return <SetPassword/>
    //         case 3:
    //             return <PersonalDetails/>
    //         case 4:
    //             return <FinalStep/>
    //     }
    // }


    const handleSendOtp = () => {
        setisOtpSend(true);
        console.log(`OTP has been send to ${email}`);
    }

    return (
        <div className='login-room'>
            <div className='login-container'>
                <img className='login-img' src='\images\login_page.jpg' />
                <div className='login-email-box'>
                    {formStep === 0 && (<Box>
                        <Typography>Email</Typography>
                        <div className='input-container'>
                            <TextField sx={{ paddingRight: '40px', width: '100%' }} placeholder='Enter your professional email' />
                            <Button onClick={handleSendOtp} sx={{ position: 'absolute', right: 0, top: 0, bottom: 0, cursor: 'pointer' }}>{isOtpSend ? 'Resend OTP' : 'Send OTP'}</Button>
                        </div>
                        <Typography sx={{ color: 'green', fontWeight: '800', fontSize: '15px', marginTop: '5px' }}>{isOtpSend ? 'OTP sent to mail' : ''}</Typography>
                        {isOtpSend ? <Box sx={{ marginTop: '10px' }}>
                            <Typography sx={{ fontWeight: '800', fontSize: '15px' }}>{isOtpSend ? 'OTP' : ''}</Typography>
                            {
                                otp.map((value, index) => (
                                    <TextField value={value} sx={{ width: 50, margin: 1, height: 30 }} />
                                ))
                            }
                        </Box> : <></>}
                    </Box>)}
                    {formStep === 1 && (<Box sx={{ display: "flex", flexDirection: 'column' }}>
                        <TextField placeholder='Set Password' />
                        <TextField placeholder='Confirm Password' />
                    </Box>)}
                    {formStep === 2 && (<Box>
                        <Typography>Name</Typography>
                        <TextField />
                        <Typography>Last Name</Typography>
                        <TextField />
                        <Typography>Hospital</Typography>
                        <TextField />
                        <Typography>Mobile Number</Typography>
                        <TextField />
                    </Box>)}
                    {formStep === 3 && (<Box sx={{ padding: '20px' }}>
                        <Typography variant='h4'>All Set!</Typography>
                        <Typography>Your details have been received, and your account will be activated within few minutes following the review</Typography>
                    </Box>)}
                    {renderButton()}
                </div>
            </div>
        </div>
    )
}

export default Auth;


// <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'center' , justifyContent:'center'}}>
//                         <button className='proceed-btn'>Proceed to Step 2 <ArrowForwardIcon /> </button>
//                         <button style={{fontWeight:'400',fontSize:'15px' , background:'none' , border:'none', marginTop:'10px' , cursor:'pointer'}}>Already have a account? Sign In</button>
//                     </Box>