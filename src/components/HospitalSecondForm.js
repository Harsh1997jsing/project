import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { formActions } from '../store';

const HospitalSecondForm = () => {
    const countries=useSelector((state)=>state.countriesData.countries);
    const selectedCountry=useSelector((state) => state.countriesData.selectedCountry);
    const states=useSelector((state)=>state.countriesData.states);
    const selecedState=useSelector((state) => state.countriesData.selecedState);
    const dispatch=useDispatch();
    //console.log(countries);
    //console.log(states);

    const handleCountryChange=(e)=>{
        const selectedCountryName=e.target.value;
        dispatch(formActions.setCountry(selectedCountryName));
        dispatch(formActions.setState(''))
    }

    const handleStateChange=(e)=>{
        const selectedStateName=e.target.value;
        dispatch(formActions.setState(selectedStateName))
    }


  return (
    <div style={{width:'80%' , margin:'0 auto' , marginTop:'30px'}}>
        <Box sx={{margin:'10px 0px'}}>
            <Typography>Hospital Name</Typography>
            <TextField sx={{width:'100%'}}/>
        </Box>
        <Box sx={{margin:'10px 0px'}}>
            <Typography>About Company</Typography>
            <TextField sx={{width:'100%'}}/>
        </Box>
        <Box sx={{width:'100%'}}>
            <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between' , margin:'10px 0px'}}>
                <Box sx={{width:'45%'}}>
                    <Typography>E-mail Address</Typography>
                    <TextField type='text' sx={{width:'100%'}}/>
                </Box>
                <Box sx={{width:'45%'}}>
                    <Typography>Phone No.</Typography>
                    <TextField type='number' sx={{width:'100%'}}/>
                </Box>
            </Box>
            <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between' , margin:'10px 0px'}}>
                <Box sx={{width:'45%'}}>
                    <Typography>Country</Typography>
                    <select value={selectedCountry} onChange={handleCountryChange} className='hospital-form-select'>
                        {countries.map((count)=>(
                            <option value={count} key={count}>{count}</option>
                        ))}
                    </select>
                </Box>
                <Box sx={{width:'45%'}}>
                    <Typography>City</Typography>
                    <select value={selecedState} onChange={handleStateChange} className='hospital-form-select'>
                        {selectedCountry && states[selectedCountry] && states[selectedCountry].map(state => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                    </select>
                </Box>
            </Box>
            <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between' , margin:'10px 0px'}}>
                <Box sx={{width:'45%'}}>
                    <Typography>Workforce Size</Typography>
                    <TextField sx={{width:'100%'}}/>
                </Box>
                <Box sx={{width:'45%'}}>
                    <Typography>Location</Typography>
                    <TextField sx={{width:'100%'}}/>
                </Box>
            </Box>
            <Box sx={{margin:'10px 0px'}}>
                <Typography>Company Website</Typography>
                <TextField sx={{width:'100%'}}/>
            </Box>
        </Box>
    </div>
  )
}

export default HospitalSecondForm;


//<Autocomplete options={options} renderInput={(params) => (<TextField {...params} label="" variant="standard" />)}/>