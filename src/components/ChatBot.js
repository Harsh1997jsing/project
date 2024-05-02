import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ChatBot = () => {
  return (
    <div style={{width:'90%' , height:'100vh', margin:'0 auto' , display:'flex' , marginTop:"100px" , marginLeft:'110px'}}>
        <Box sx={{width:'30%', height:'90%' , padding:'5px'}}>
          <Box sx={{display:'flex' , alignItems:'center' , justifyContent:'space-between'}}>
            <Typography variant='h5' sx={{fontWeight:'bold'}} >Messages</Typography>
            <IconButton> <MoreHorizIcon/> </IconButton>
          </Box>
          <Box>
            <TextField sx={{width:'99%'}} placeholder='Search by user'/>
          </Box>
          <Box sx={{marginTop:"10px" , width:'99%'}}>
          <table className='message-box-table'> 
            <tr className='message-box-row'>
              <td className='message-box-cell'>
                <img className='message-data-cell-img' src='\images\Shubman_Gill.jpg' alt='#'/>
                <Typography>User Name</Typography>
              </td>
            </tr>
          </table>
          </Box>
        </Box>
        <Box sx={{width:'70%' , height:'90%' , display:"flex", flexDirection:'column' , gap:'5px'}}>
            <Box sx={{width:'100%' , paddingLeft:'10px' , gap:'10px' , height:'100px' , display:'flex' , alignItems:'center' , border:'1px solid #ddd'}}>
                <img className='chatbot-user-image' src='\images\Shubman_Gill.jpg' alt='chatbot-user-image'/>
                <Typography>User Name</Typography>
            </Box>
            <Box sx={{width:'98%' , height:'100%' , bgcolor:'#ddd' , margin:'0 auto' , textAlign:'center'}}>Message Window</Box>
            <Box sx={{width:'98%', display:'flex' , alignItems:'center' , gap:'10px' , margin:'0 auto'}}>
                <TextField placeholder='Type your message...' sx={{width:'95%'}} InputProps={{endAdornment:(<> <IconButton><AttachFileIcon/></IconButton><IconButton><EmojiEmotionsIcon/></IconButton></>)}} />
                <SendIcon sx={{width:'40px' , bgcolor:'#0057B1' , height:'35px' , borderRadius:"10px" , padding:'10px' }}></SendIcon>
            </Box>
        </Box>
    </div>
  )
}

export default ChatBot;