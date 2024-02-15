'use client';
import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import AssistantChat from './chat/AssistantChat';
import UserChat from './chat/UserChat';

interface ChatInputProps {
  messages:any
}

export const ChatBox:React.FC<ChatInputProps> = ({messages}) => {

  useEffect(() => {
    const scrollToBottom = () => {
      const chatBox = document.getElementById('chat-box');
      if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
    };
    scrollToBottom();
  }, [messages]);


  return (
    <Box>
      <Box id="chat-box" sx={{border: '2px solid gray', height:'60vh', borderRadius:'5px',display:'block',overflowY:'scroll',wordBreak: 'break-word'}} >
        {
          messages.map((message:any, index:number) => (

            message.type === "system" ? (

              <Box key={index}>
                <AssistantChat message={message.message}/> 
              </Box>

            ) : (
              <Box key={index}>
                <UserChat message={message.message}/>
              </Box>
            )
          ))
        }
      </Box>
      
    </Box>
  );
};
