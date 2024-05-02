import React from 'react'
import {Box , Button} from '@mui/material';
import {useSelector} from 'react-redux';

const AllClaims = () => {
    const data=useSelector((state)=>state.patientData.patients);
    console.log(data);

    return (
        <div>
            <Box>
                <table className='patient-table'>
                    <tr>
                        <th className='table-head'>Name</th>
                        <th className='table-head'>Policy ID</th>
                        <th className='table-head'>Policy End Date</th>
                        <th className='table-head'>Policy Company</th>
                        <th className='table-head'>Status</th>
                        <th className='table-head'>Action</th>
                    </tr>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td style={{ display: "flex", alignItems: 'center', gap: '5px' }} className='table-data'> <img className='user-photo' src={row.userPhoto} alt='#' /> {row.name}</td>
                                <td className='table-data'>{row.policyID}</td>
                                <td className='table-data'>{row.policy_end_date}</td>
                                <td className='table-data'>{row.policy_company}</td>
                                <td className='table-data'>{row.status}</td>
                                <td style={{ alignItems: 'center', textAlign: 'center' }}><Button variant='contained' sx={{ color: 'white' }}>Submit Claim</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Box>
        </div>
    )
}

export default AllClaims;