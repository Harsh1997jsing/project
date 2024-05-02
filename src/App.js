import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import "./App.css";
import Login from './components/Login';
import Register from './components/Register';
import { useSelector } from 'react-redux';
import ClaimComponent from './components/ClaimComponent';
import Dashboard from './components/Dashboard';
import HospitalRegistration from './components/HospitalRegistration';
import ChatBot from './components/ChatBot';
import PolicyOverView from './components/PolicyOverView';
import DashboardComponents from './components/DashboardComponents';
import AdminPanel from './components/AdminPanel';
import InsuranceForm from './components/InsuranceForm';
import UploadDocument from './components/UploadDocument';
import DashboardRejected from './components/DashboardRejected';
import DashboardProcess from './components/DashboardProcess';
import DashboardPending from './components/DashboardPending';
import NavBar from './components/NavBar';
import ChatAI from './components/ChatAI';

const App = () => {
  const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
  console.log(isLoggedIn);

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <Routes>
          {!isLoggedIn ?
            <>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            </>
            :
            <>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/dashboard/claim-settled' element={<DashboardComponents/>}/>
          <Route path='/dashboard/claim-rejected' element={<DashboardRejected/>}/>
          <Route path='/dashboard/claim-process' element={<DashboardProcess/>}/>
          <Route path='/dashboard/claim-pending' element={<DashboardPending/>}/>
          <Route path='/claim' element={<ClaimComponent/>}/>
          <Route path='/organization-form' element={<HospitalRegistration/>}/>
          <Route path='/message' element={<ChatBot/>}/>
          <Route path='/chatbot' element={<ChatAI/>}/>
          <Route path='/policy-overview' element={<PolicyOverView/>}/>
          <Route path='/insurance-form' element={<InsuranceForm/>}/>
          <Route path='/admin panel' element={<AdminPanel/>}/>
          <Route path='/document-upload' element={<UploadDocument/>}/> </>}
        </Routes>
      </main>
    </>
  )
}

export default App;

//Innovation@1998 ... Git Hub Password
