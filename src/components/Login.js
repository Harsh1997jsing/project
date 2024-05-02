import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {authActions} from '../store';
import {useDispatch} from 'react-redux';
import axios from 'axios';

const Login = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [formData,setFormData]=useState({email:'', password:''})

    const handleChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const handleSubmit = ()=>{
        sendRequest().then((data)=>localStorage.setItem('userName',data.user.firstName))
        .then(()=>dispatch(authActions.login()))
        .then(()=>navigate('/dashboard'))
                     //localStorage.setItem('userName',data.user.firstName)
    }

    const sendRequest=async()=>{
        const res=await axios.post(`http://localhost:5000/login`,{
            email:formData.email,password:formData.password
        }).catch(err => console.log(err))

        const data=res.data;
        console.log(data);
        return data;
    }
    
    return (
        <div className='register-container'>
            <img className='login-img' src='\images\login_page.jpg' alt='#'/>
            <div className='register-sub-container'>
                <TextField name='email' onChange={handleChange} value={formData.email} type='email' placeholder='Enter your email ID' />
                <TextField name='password' onChange={handleChange} value={formData.password} type='password' placeholder='Password'/>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    )
}

export default Login;