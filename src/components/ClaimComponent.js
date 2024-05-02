import React, { useState } from 'react';
import {Box, Button, IconButton, Link, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';

const ClaimComponent = () => {
  const navigate=useNavigate();
  const [searchItem,setSearchItem]=useState('');
  const data=useSelector((state)=>state.patientData.patients);
  console.log(data);

  const filterData=data.filter((item)=> 
    item.name.toLowerCase().includes(searchItem.toLowerCase()))

  const handleSearchChange=(e)=>{
    setSearchItem(e.target.value);
  }

  const submitClaim=()=>{
    navigate('/policy-overview')
  }

  return (
    <div className='claim-container'>
      <Box sx={{ width: '70%', position: 'relative', display: 'inline-block' }}>
        <TextField onChange={handleSearchChange} value={searchItem} type='text' sx={{ paddingRight: '40px', width: '100%' }} placeholder='Search by patient name'/><IconButton sx={{ position: 'absolute', right: 0, top: 0, bottom: 0, cursor: 'pointer' }} ><SearchIcon ></SearchIcon></IconButton>
      </Box>
      <Box>
        <table className='patient-table'>
          <tr>
            <th className='table-head'>Name</th>
            <th className='table-head'>Policy ID</th>
            <th className='table-head'>Policy Start Date</th>
            <th className='table-head'>Policy End Date</th>
            <th className='table-head'>Insurer</th>
            <th className='table-head'>Action</th>
          </tr>
            <tbody>
            {filterData.map((row,index)=>(
              <tr key={index}>
                <td style={{display:"flex" , alignItems:'center' , gap:'5px'}} className='table-data'> <img className='user-photo' src={row.userPhoto} alt='#'/> {row.name}</td>
                <td className='table-data'>{row.policyID}</td>
                <td className='table-data'>{row.policy_start_date}</td>
                <td className='table-data'>{row.policy_end_date}</td>
                <td className='table-data'>{row.policy_company}</td>
                <td style={{alignItems:'center', textAlign:'center'}}><Button onClick={submitClaim} variant='contained' sx={{color:'white'}}>Submit Claim</Button><MoreHorizIcon></MoreHorizIcon></td>
              </tr>
            ))}
            </tbody>
        </table>
      </Box>
    </div>
  )
}

export default ClaimComponent;

