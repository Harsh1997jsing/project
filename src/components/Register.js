import React, { useState } from 'react'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import FinalStep from './FinalStep'
import { Box, Step, StepLabel, Stepper } from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { authActions } from '../store';
import { useDispatch } from 'react-redux'

const Register = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [activeStep, setActiveStep] = useState(0);
    const [formData,setFormData]=useState({email:"",password:"",firstName:"",lastName:"",hospitalName:"",mobileNumber:""});

    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1)
    }

    const sendRequest=async()=>{
        const res=await axios.post(`http://localhost:5000/signup`,{
            email:formData.email,password:formData.password,firstName:formData.firstName,
            lastName:formData.lastName,hospitalName:formData.hospitalName,mobileNumber:formData.mobileNumber
        }).catch(err =>console.log(err))

        const data=await res.data;
        console.log(data)
        return data
    }

    const handleSubmitForm=(e)=>{
        //console.log(formData);
        //e.preventDefault();
        sendRequest().then((data)=>localStorage.setItem('userName',data.user.firstName))
        .then(()=>dispatch(authActions.login))
        .then(()=>navigate('/organization-form'))
    }

    const steps = ['Account Credentials', 'Set Password', 'Personal Details'];

    return(
        <div className='registration-form-container'>
            <Box sx={{width:'50%' , display:"flex" , alignItems:'center' , justifyContent:'center'}}>
                <img style={{width:'400px'}} src='\images\login_page.jpg' alt='login-page-image'/>
            </Box>
            <Box sx={{width:'50%' , display:'flex' ,
                     flexDirection:"column" , alignItems:'center' , justifyContent:'center' , gap:'60px'}}>
                <Box>
                    <img className='company-logo' src='\images\shovel_ogo.jpeg' alt='company-logo'/>
                </Box>
                <Box>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label,index)=>(
                            <Step>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <Box>
                    {activeStep === 0 && <FirstStep formData={formData} setFormData={setFormData} handleNext={handleNext}/>}
                    {activeStep === 1 && <SecondStep formData={formData} setFormData={setFormData} handleNext={handleNext}/>}
                    {activeStep === 2 && <ThirdStep formData={formData} setFormData={setFormData} handleNext={handleNext}/>}
                    {activeStep === 3 && <FinalStep formData={formData} setFormData={setFormData} handleNext={handleNext} handleSubmitForm={handleSubmitForm}/>}
                </Box>
            </Box>
        </div>
    )
}

export default Register;

