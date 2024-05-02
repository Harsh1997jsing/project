import { Button, Step, StepLabel, Stepper, Typography } from '@mui/material'
import React, { useState } from 'react'
import HospitalFirstForm from './HospitalFirstForm'
import HospitalSecondForm from './HospitalSecondForm'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from 'react-router-dom';

const HospitalRegistration = () => {
    const [activeStep,setActiveStep]=useState(0);
    const navigate=useNavigate();

    const steps=['Organization Images','Organization Details'];

    const handleNextStep=()=>{
        setActiveStep((prevStep)=>prevStep+1)
        if(activeStep === 1){
            navigate('/dashboard')
        }
    }

  return (
    <div style={{margin:'20px 30px'}}>
        <div>
            <img style={{width:'200px' , height:'100px' , objectFit:'contain'}} src='\images\shovel_ogo.jpeg' alt='company-logo'/>
        </div>
        <div>
            <Typography variant='h4'>Add Organization Details</Typography>
            <Typography>Tell us more about your organization</Typography>
        </div>
        <div style={{position:'relative',width:'50%' , height:'fit-content' , padding:'50px' , margin:'0 auto' , marginTop:'20px'}}>
            <Stepper activeStep={activeStep}> 
                {steps?.map((label,index)=>(
                    <Step>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === 0 && (<HospitalFirstForm/>)}
                {activeStep === 1 && (<HospitalSecondForm/>)}
            </div>
            <Button onClick={handleNextStep} variant='contained' sx={{color:'white' ,backgroundColor:'#0057B1' ,position:'absolute' , bottom:0 , right:0 }}>Proceed to Next Step <ArrowForwardIcon></ArrowForwardIcon> </Button>
        </div>
    </div>
  )
}

export default HospitalRegistration;