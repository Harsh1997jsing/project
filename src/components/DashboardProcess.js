import React, { useEffect, useState } from 'react';
import {TextField , Box , Button} from '@mui/material';
import {useSelector , useDispatch} from 'react-redux';
import { patientActions } from '../store';

const DashboardProcess = () => {
    //const data=useSelector((state)=>state.patientData.patients);
    const filters=useSelector((state)=>state.patientData.status);
    const filterData=useSelector((state)=>state.patientData.filterData);
    const [searchInput,setSearchInput]=useState('')
    //console.log(filterData);
    //console.log(filters);
    const dispatch=useDispatch();

    const handleSearchChange=(e)=>{
        setSearchInput(e.target.value)
    }

    const handleChange=(e)=>{
        const selectedFilter=e.target.value;
        dispatch(patientActions.selectedFilter(selectedFilter))
    }

    const searchPatients=filterData.filter(patient=>
        patient.policyID.toLowerCase().includes(searchInput.toLowerCase()));

    useEffect(()=>{
        dispatch(patientActions.selectedFilter('Process'))
    },[dispatch])


  return (
    <div style={{width:'90%' , height:'100vh' , margin:'0 auto' , marginTop:'100px' , marginLeft:'110px'}}>
        <Box sx={{width:'100%' , display:'flex' , alignItems:'center' , justifyContent:'space-between'}}>
            <Box sx={{display:'flex' , gap:'10px'}}>
                <TextField sx={{width:'260px' , bgcolor:'white'}} type='search' placeholder='Policy ID' onChange={handleSearchChange}/>
                <select defaultValue='All' value={filters} onChange={handleChange} className='dashboard-select'>
                    <option className='dashboard-option'>Select Status Option</option>
                    <option value='Settled' className='dashboard-option'>Settled</option>
                    <option value='Rejected' className='dashboard-option'>Rejected</option>
                    <option value='Process' className='dashboard-option'>Process</option>
                    <option value='Pending' className='dashboard-option'>Pending</option>
                    <option value='All' className='dashboard-option'>All</option>
                </select>
            </Box>
            <Box>
                <input className='dashboard-date' type='date'/>
            </Box>
        </Box>
        <Box sx={{ marginTop:"20px" , width:'100%' , height:'200px'}}>
            <Box>
                <table className='patient-table'>
                    <tr>
                        <th className='table-head'>Name</th>
                        <th className='table-head'>Policy Number</th>
                        <th className='table-head'>Policy Start Date</th>
                        <th className='table-head'>Policy End Date</th>
                        <th className='table-head'>Insurer</th>
                        <th className='table-head'>Status</th>
                        <th className='table-head'>Action</th>
                    </tr>
                    <tbody className='patient-table-body'>
                        {searchPatients.map((row, index) => (
                            <tr key={index} className='table-row-ani'>
                                <td style={{ display: "flex", alignItems: 'center', gap: '5px' }} className='table-data'> <img className='user-photo' src={row.userPhoto} alt='#' /> {row.name}</td>
                                <td className='table-data'>{row.policyID}</td>
                                <td className='table-data'>{row.policy_start_date}</td>
                                <td className='table-data'>{row.policy_end_date}</td>
                                <td className='table-data'>{row.policy_company}</td>
                                <td className='table-data'>{row.status}</td>
                                <td style={{ alignItems: 'center', textAlign: 'center' }}><Button variant='contained' sx={{ color: 'white' }}>Submit Claim</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Box>
        </Box>
    </div>
  )
}

export default DashboardProcess;


//DashboardProcess