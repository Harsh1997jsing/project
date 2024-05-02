import {configureStore,createSlice} from '@reduxjs/toolkit';

export const authSlice=createSlice({
    name:"auth",
    initialState:{
        isLoggedIn:false,
    },
    reducers:{
        login(state){
            state.isLoggedIn=true
        },
        logout(state){
            state.isLoggedIn=false
        }
    }
});

export const answersSlice=createSlice({
    name:'botResponse',
    initialState:{
        answers:[]
    },
    reducers:{
        addAnswer(state,action){
            state.answers=action.payload;
        }
    }
})

export const patientSlice=createSlice({
    name:'patientSlice',
    initialState:{
        patients:[
        {id:1,name:'Shubman Gill',policyID:'12345',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',userPhoto:'https://upload.wikimedia.org/wikipedia/commons/3/34/Shubman_Gill_2023_%28cropped%29.jpg',status:'Settled',policy_start_date:'12/12/1976'},
        {id:2,name:'Rohit Sharma',policyID:'54321',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',userPhoto:'https://upload.wikimedia.org/wikipedia/commons/3/34/Shubman_Gill_2023_%28cropped%29.jpg',status:'Settled',policy_start_date:'12/12/1976'},
        {id:3,name:'Virat Kohli',policyID:'56789',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Settled',policy_start_date:'12/12/1976'},
        {id:4,name:'Shreyas Iyer',policyID:'98765',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Settled',policy_start_date:'12/12/1976'},
        {id:5,name:'KL Rahul',policyID:'74125',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Settled',policy_start_date:'12/12/1976'},
        {id:6,name:'Surya Kumar',policyID:'52369',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Settled',policy_start_date:'12/12/1976'},
        {id:7,name:'Ravindra Jadeja',policyID:'95123',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Rejected',policy_start_date:'12/12/1976'},
        {id:8,name:'Kuldeep Yadav',policyID:'15987',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Rejected',policy_start_date:'12/12/1976'},
        {id:9,name:'Mohammed Siraj',policyID:'12345',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Rejected',policy_start_date:'12/12/1976'},
        {id:10,name:'Mohammed Shami',policyID:'54321',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Rejected',policy_start_date:'12/12/1976'},
        {id:11,name:'Jasprit Bumrah',policyID:'56789',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Rejected',policy_start_date:'12/12/1976'},
        {id:12,name:'Shardul Thakur',policyID:'98765',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Rejected',policy_start_date:'12/12/1976'},
        {id:13,name:'Gautam Gambhir',policyID:'11111',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Pending',policy_start_date:'12/12/1976'},
        {id:14,name:'MS Dhoni',policyID:'22222',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Pending',policy_start_date:'12/12/1976'},
        {id:15,name:'Zaheer Khan',policyID:'333333',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Pending',policy_start_date:'12/12/1976'},
        {id:16,name:'Suresh Raina',policyID:'44444',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Pending',policy_start_date:'12/12/1976'},
        {id:17,name:'Yusuf Pathan',policyID:'55555',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Pending',policy_start_date:'12/12/1976'},
        {id:18,name:'Munaf Patel',policyID:'66666',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Pending',policy_start_date:'12/12/1976'},
        {id:19,name:'Hardik Pandya',policyID:'77777',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Process',policy_start_date:'12/12/1976'},
        {id:20,name:'Krunal Pandya',policyID:'88888',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Process',policy_start_date:'12/12/1976'},
        {id:21,name:'Deepak Chahar',policyID:'99999',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Process',policy_start_date:'12/12/1976'},
        {id:22,name:'Rahul Chahar',policyID:'11221',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Process',policy_start_date:'12/12/1976'},
        {id:23,name:'Yuzi Chahal',policyID:'33221',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Process',policy_start_date:'12/12/1976'},
        {id:24,name:'Smriti Mandhana',policyID:'77889',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Process',policy_start_date:'12/12/1976'},
        {id:25,name:'Shreyanka Patil',policyID:'66556',policy_end_date:'12/12/1977',policy_company:'Tata Health Care',status:'Process',policy_start_date:'12/12/1976'}],

        status:['Settled','In-Process','Pending','Rejected','All'],
        filterData:[],
        settledPatientCount:[],
        rejectedPatientCount:[]
    },
    reducers:{
        selectedFilter(state,action){
            const patients=state.patients;
            //console.log(action.payload);
            const selectedFilter=action.payload;
            //console.log(selectedFilter);
            let filterPatients;
            if(selectedFilter === 'All'){
                filterPatients=patients
            }
            else {
                filterPatients=patients.filter((patient) => patient.status === selectedFilter)
            }
            return{
                ...state,
                filterData:filterPatients,
            }
        },
        getSettledPatientCount(state){
            let x;
            x=state.patients.filter((patient) => patient.status === 'Settled').length;
            return {
                ...state,
                settledPatientCount:x
            }
        },
        getRejectedPatientCount(state){
            return state.patients.filter((patient) => patient.status === 'Rejected').length;
        }
    }
});

export const dataSlice=createSlice({
    name :'formData',
    initialState:{
        countries:['India','USA','UK','Netherlands','Spain','Germany'],
        selectedCountry:'',
        states:{
                India:['Maharashtra','Gujrat','Goa'],
                USA:['New York','California','Texas'],
                UK:['London','Manchester','Scotland'],
                Netherlands:['Amsterdam','Utrecht','Veldhoven'],
                Spain:['Barcelona','Madrid'],
                Germany:['Munich','Frankfurt']
            },
        selectedState:null,
    },
    reducers:{
        setCountry(state,action){
            state.selectedCountry=action.payload
        },
        setState(state,action){
            state.selectedState=action.payload
        }
    }
});

export const authActions=authSlice.actions;
export const patientActions=patientSlice.actions;
export const formActions=dataSlice.actions;
export const answerActions=answersSlice.actions;

export const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        patientData:patientSlice.reducer,
        countriesData:dataSlice.reducer,
        allAnswers:answersSlice.reducer
    }
});

