import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {authActions} from '../store/index';

const FinalStep = ({handleSubmitForm}) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleSubmit=()=>{
    handleSubmitForm();
    dispatch(authActions.login());
    navigate('/organization-form');
  }


  return ( 
    <div className='final-step-login'>
      <Box sx={{ width: '400px' }}>
        <Typography variant='h3'>All Set!</Typography>
        <Typography>Your details have been received, and your account will be activated within few minutes following a review.</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '30px 0px' }}>
        <Button onClick={handleSubmit} variant='contained' sx={{ bgcolor: '#0057B1', width: 'fit-content' }} >Go To Home</Button>
      </Box>
    </div>
  )
}

export default FinalStep;