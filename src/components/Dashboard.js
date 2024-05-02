import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Dashboard = () => {
  const navigate=useNavigate();
  const [selectedDate,setSelectedDate]=useState(null);
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const settledCount=useSelector(state => state.patientData.settledPatientCount);
  console.log(settledCount);
  //const filterData=useSelector((state)=>state.patientData.filterData);
  //console.log(filterData.length);

 
  const handleDateChange=(e)=>{
    setSelectedDate(e.target.value)
  }

  return (
    <div className='dashboard-container'>
      <div className='dashboard-sub-container'>
      <Box sx={{marginLeft:'160px'}}>
        <input className='dashboard-date' type='date' name='date' value={selectedDate} onChange={handleDateChange}/>
      </Box>
      <Box sx={{margin:'5%' , display:'flex' , flexDirection:'column' , gap:5 , alignItems:'center' , justifyContent:'center'}}>
        <div className='dashboard-first-container'>
          <Box sx={{position:'relative',width:'315px',height:'218px',border:'1px solid black',borderRadius:'8px',bgcolor:'#FFFFFF', boxShadow:'10px 10px 20px #ccc'}}>
            <div style={{display:'flex' ,padding:'0px 10px', alignItems:'center',justifyContent:'space-between'}}>
              <h3>Claim Settled</h3>
              <img src='\images\done.jpg' alt='logo'/>
            </div>
            <div style={{padding:'0px 10px'}}>
              <p>Date : {selectedDate}</p>
              <p>Number of task</p>
            </div>
            <div style={{display:'flex' , border:'1px solid black' , alignItems:'center'}}>
              <Button onClick={()=>navigate('/dashboard/claim-settled')} sx={{position:'absolute',bottom:5,left:15,gap:3,color:'black'}}>See All Tasks<ArrowForwardIosIcon></ArrowForwardIosIcon></Button> 
            </div>
          </Box>
          <Box sx={{position:'relative',width:'315px',height:'218px',border:'1px solid black',borderRadius:'8px',bgcolor:'#FFFFFF', boxShadow:'10px 10px 20px #ccc' }}>
          <div style={{display:'flex' , padding:'0px 10px' , alignItems:'center',justifyContent:'space-between'}}>
              <h3>Query Raised</h3>
              <img src='\images\pending.jpg' alt='logo'/>
            </div>
            <div style={{padding:'0px 10px'}}>
              <p>Date : {selectedDate}</p>
              <p>Number of task</p>
            </div>
            <div style={{display:'flex' , border:'1px solid black'}}>
              <Button onClick={()=>navigate('/dashboard/claim-pending')} sx={{position:'absolute',bottom:5,left:15,gap:3,color:'black'}}>See All Tasks<ArrowForwardIosIcon></ArrowForwardIosIcon> </Button> 
            </div>
          </Box>
        </div>
        <div className='dashboard-second-container'>
          <Box sx={{position:'relative',width:'315px',height:'218px',border:'1px solid black',borderRadius:'8px',bgcolor:'#FFFFFF' , boxShadow:'10px 10px 20px #ccc'}}>
          <div style={{display:'flex' , padding:'0px 10px', alignItems:'center',justifyContent:'space-between'}}>
              <h3>Claim In-Process</h3>
              <img src='\images\loading.jpg' alt='logo'/>
            </div>
            <div style={{padding:'0px 10px'}}>
              <p>Date : {selectedDate}</p>
              <p>Number of task</p>
            </div>
            <div style={{display:'flex' , border:'1px solid black'}}>
              <Button onClick={()=>navigate('/dashboard/claim-process')} sx={{position:'absolute',bottom:0,left:5,gap:3,color:'black'}}>See All Tasks<ArrowForwardIosIcon></ArrowForwardIosIcon> </Button> 
            </div>
          </Box>
          <Box sx={{position:'relative',width:'315px',height:'218px',border:'1px solid black',borderRadius:'8px',bgcolor:'#FFFFFF' , boxShadow:'10px 10px 20px #ccc'}}>
          <div style={{display:'flex' , padding:'0px 10px' , alignItems:'center',justifyContent:'space-between'}}>
              <h3>Claim Rejected</h3>
              <img src='\images\rejected.jpg' alt='logo'/>
            </div>
            <div style={{padding:'0px 10px'}}>
              <p>Date : {selectedDate}</p>
              <p>Number of task</p>
            </div>
            <div style={{display:'flex' , border:'1px solid black'}}>
              <Button onClick={()=>navigate('/dashboard/claim-rejected')} sx={{position:'absolute',bottom:0,left:5,gap:3,color:'black'}}>See All Tasks<ArrowForwardIosIcon></ArrowForwardIosIcon> </Button> 
            </div>
          </Box>
        </div>
      </Box>
      </div>
    </div>
  )
}

export default Dashboard;