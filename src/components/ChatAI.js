import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Chip , IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {v4 as uuidV4} from 'uuid';
import DeleteIcon from '@mui/icons-material/Delete';
import { answerActions } from '../store';
import {useDispatch, useSelector} from 'react-redux';

const ChatAI = () => {
    const dispatch=useDispatch()
    const [input,setInput]=useState('');
    const [questions,setQuestions]=useState([]);
    const [conversation,setConversation]=useState([]);
    const [answers,setAnswers]=useState([]);
    //console.log(conversation);
    const allAnswers=useSelector((state)=>state.allAnswers.answers);
    //console.log(allAnswers);

    const profileName=localStorage.getItem('userName');

    useEffect(()=>{
        const savedConversation=localStorage.getItem('conversation');
        if(savedConversation){
            setConversation(JSON.parse(savedConversation))
        }
    },[])

    const handleSubmit=async(e)=>{
        e.preventDefault();

        const newConvo={
            id:uuidV4(),
            content:input,
            role:'user',
            userName:'You'
        }
        //setConversation([...conversation,newConvo]);
        setQuestions([...questions,newConvo]);

        try{
            //const response = await fetch('https://api.openai.com/v1/chat/completions', {
            const response = await fetch('https://2a41-35-222-71-109.ngrok-free.app/ask', {
            method: 'post',
            body:JSON.stringify(input)
            // headers: {

            //     'Authorization': 'Bearer sk-proj-WPD6OFlO4XLFCrnVyCpgT3BlbkFJtxwfkeq4AN0113wLJhUw',  // Replace with your OpenAI API key
            //     'Content-Type': 'application/json'
            // },
            // body: JSON.stringify({
            //     messages: [
            //         {
            //             role: 'system',
            //             content: 'You are a helpful assistant.'
            //         },
            //         {
            //             role: 'user',
            //             content: input
            //         }
            //     ],
            //     model:'gpt-3.5-turbo'
            // })
        });
        const data =await response.json();
        console.log(data.answer);
        const answerMain=data.answer;
        //console.log(data.answer);
        //const botResponse = data.choices[0].message.content.trim();
        const botResponse = data.answer;
        setAnswers(botResponse);
        dispatch(answerActions.addAnswer(botResponse));
        //setConversation([...conversation,{id:uuidV4(),content:botResponse}]);
        const newAnswer={
            id:uuidV4(),
            content:botResponse,
            role:'system',
            userName:'System'
        }

        const questionIdentity=uuidV4();
        const conversationId=uuidV4();
        const parentId=uuidV4();

        setConversation((prevConversation)=>[
            ...prevConversation,
            {id:questionIdentity,parentId:parentId,content:input,role:'user'},
            {id:conversationId,parentId:parentId,content:botResponse,role:'system'}
        ])
        localStorage.setItem('conversation',JSON.stringify(conversation))
        }catch(error){
            console.log(error)
        }
        setInput('');
    }

    // const handleQuestionDelete=(questionID)=>{
    //     console.log(questionID);
    //     const updatedQuestions=questions.filter((question)=>question.id !== questionID)
    //     setQuestions(updatedQuestions)

    //     const updatedConversation=conversation.filter((convo) => convo.id !== questionID)
    //     setConversation(updatedConversation)
    // }

    const handleQuestionDelete=(questionId)=>{
        const conversationItem=conversation.find((convo)=>convo.id === questionId);

        if(conversationItem && conversationItem.parentId){
            const updatedQuestions=questions.filter((question) => question.id !== questionId);
            const updatedConversation=conversation.filter((convo) => convo.parentId !== conversationItem.parentId);

            setQuestions(updatedQuestions);
            setConversation(updatedConversation);
        }
    }

    const handleQuestionClick=(questionId)=>{
        //console.log(questionId);
        const element=document.getElementById(`conversation-${questionId}`);
        //console.log('Selected Element : ',element)
        if(element){
          element.scrollIntoView({behavior:'smooth'})
        }
    }

    return (
        <div style={{ display: 'flex', gap:'10px' ,width: '94%', margin: '80px' , bgcolor:'goldenrod' , height:"40vh"}}>
            <Box sx={{ width: '20%', height: '88vh' , padding:'10px 0px', bgcolor:'azure' , display:'flex' , flexDirection:'column' , alignItems:'center' , borderRadius:"10px"}}>
                <Box sx={{marginTop:'0px'}}>
                    <Typography variant='h5' sx={{fontWeight:'600'}}>Chat History</Typography>
                </Box>
                <Box sx={{width:'90%' , display:"flex", flexDirection:'column' , alignItems:'center' ,height:'400px' , overflow:'auto' , scrollbarWidth:'none' , marginTop:'5px'}}>
                    {
                        conversation.map(({id,content,role})=>(
                            role === 'user' && (
                                <Box>
                                    <Chip id={id} onClick={()=>handleQuestionClick(id)} key={id} sx={{ cursor:'pointer' , width:'200px' , bgcolor:'whitesmoke' , fontWeight:'600' , fontSize:'15px' ,display:'flex' , justifyContent:'space-between' , margin:'10px 0px' , padding:'20px 0px'}} avatar={<Avatar> <DeleteIcon sx={{bgcolor:'white'}} onClick={()=>handleQuestionDelete(id)}/> </Avatar>} label={content}/>
                                </Box>
                            )
                        ))
                    }
                </Box>
            </Box>
            <Box sx={{ width: '80%', bgcolor:'azure' , height: '88vh',padding:'10px 0px' , display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                <Box sx={{display:'flex' , width:'95%' , justifyContent:'space-between' , alignItems:'center'}}>
                    <Typography variant='h5' sx={{ fontWeight: '600' }}>Claim Assistant</Typography>
                    <Button>Export</Button>
                </Box>
                <Box sx={{ width: '95%', height: "550px" , overflow:'auto' , scrollbarWidth:'none'}}>
                    {conversation.length !== 0 ? conversation.map((item)=>(
                        <Box key={item.id} id={item.id}  sx={{display:'flex' , flexDirection:'column' , gap:1 , margin:"10px 0px"}}>
                            {item.role === 'user' && (
                                <Box sx={{display:"flex" , flexDirection:'column' , justifyContent:"flex-start" ,alignItems:'flex-start' , gap:1}}>
                                    <Avatar sx={{bgcolor:'#0057B1'}}>{profileName.split('')[0]}</Avatar>
                                    <Typography sx={{margin:"0px 15px" , width:'fit-content' , fontWeight:'600' , height:'fit-content' , bgcolor:'rgb(211, 238, 249)' , padding:'10px' , borderRadius:'10px' , boxShadow:'10px 10px 20px #ccc'}}>{item.content}</Typography>
                                </Box>
                            )}
                            <span id={`conversation-${item.id}`}></span>
                            {item.role === 'system' && (
                            <Box sx={{display:'flex' , flexDirection:'column' ,justifyContent:'flex-end' , alignItems:"flex-end"}}>
                                <Avatar sx={{bgcolor:'orange'}}>S</Avatar>
                                <Typography sx={{margin:"5px 15px" , fontWeight:'600' , width:'fit-content' , maxWidth:'800px' , height:'fit-content' , bgcolor:'rgb(209, 251, 209)' , padding:'10px' , borderRadius:'10px' , boxShadow:'10px 10px 20px #ccc'}}>{item.content}</Typography>
                                {/* <Typography sx={{margin:"10px 15px"}}>{answerMain}</Typography> */}
                            </Box>)}
                        </Box>
                    )) : <Box sx={{width:'100%' , height:'100%' , display:'flex' , alignItems:'center' , justifyContent:'center'}}> <Typography variant='h4' sx={{fontWeight:'600' , color:'#0057B1'}}>How can I assist you?</Typography> </Box>}
                </Box>
                <form onSubmit={handleSubmit} style={{width:"100%" , display:"flex" , justifyContent:'center'}}>
                    <TextField value={input} onChange={(e)=>setInput(e.target.value)} sx={{width:'80%'}} placeholder='Type and press enter' InputProps={{endAdornment: (<InputAdornment position="end"> <IconButton type='submit'><SendIcon onClick={handleSubmit} sx={{cursor:'pointer'}}/></IconButton></InputAdornment>),}}/>
                </form>
            </Box>
        </div>
    )
}

export default ChatAI;


// const response=await axios.post('https://api.openai.com/v1/completions',
            // {
            //     max_tokens:50,
            //     model:'gpt-3.5-turbo',
            //     content:`${input}`
            //   },
            //   {
            //     headers:{
            //       'Authorization':'Bearer sk-proj-WPD6OFlO4XLFCrnVyCpgT3BlbkFJtxwfkeq4AN0113wLJhUw',
            //       'Content-Type':'application/json'
            //     }
            //   });
            // const botResponse=response.data;
            // console.log(botResponse);



            // {questions.map(({id,content})=>(
            //     <>
            //     <Chip id={id} onClick={()=>handleQuestionClick(id)} key={id} sx={{ cursor:'pointer' , width:'200px' , bgcolor:'whitesmoke' , fontWeight:'600' , fontSize:'15px' ,display:'flex' , justifyContent:'space-between' , margin:'10px 0px' , padding:'20px 0px'}} avatar={<Avatar> <RemoveCircleIcon  onClick={()=>handleQuestionDelete(id)}/> </Avatar>} label={content}/>
            //     {/* console.log(id) */}
            //     </>
            // ))}

            // {item.role === 'system' && (
            //     <Box>
            //         <Avatar>S</Avatar>
            //         <Typography sx={{margin:"10px 15px"}}>{item.content}</Typography>
            // </Box>  
            // )}