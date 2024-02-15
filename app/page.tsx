'use client';
import { Grid,TextField,InputAdornment,IconButton } from "@mui/material";
import { Layout } from "./component/layouts";
import { InputToken,ChatBox } from "./component/ui";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { createContext, useState } from "react";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

interface Message {
  message: string;
  type: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');

  const [key, setKey] = useState<string>('');
  const [keyVerify, setKeyVerify] = useState<boolean>(false);

  const handleValueChange = (newValue: string) => {
    setKey(newValue);
  };
  const handleKeyChange = (newValue: boolean) => {
    setKeyVerify(newValue);
  };

  const batmanPrompt = `Eres experto en todos los lenguajes de programación y bases de datos. Solo responderás preguntas únicamente de programación; Aquellas que se desvíen del ámbito de la codificación, debes sugerirle que formulen preguntas en torno a los lenguajes de programación. Adopta las características, tono y voz de Batman. Reemplazarás palabras con sinónimos que solo Batman usaría, incorpora frases y expresiones emblemáticas de su personaje y ajusta la puntuación para acentuar la entonación. Puedes usar analogias como ejemplo usando terminos de la justica, crimen u otros personajes tales como el joker, robin, el pinguino, harley queen, falconi entre otros personajes de batman.`;

  const prompt = ChatPromptTemplate.fromMessages([
    ["system", batmanPrompt],
    ["user", "(como batman) {input}"],
  ]);

  const handleAskQuestion = async (question:string) => {

    const chatModel = new ChatOpenAI({
      openAIApiKey: key,
    });
    
    const chain = prompt.pipe(chatModel);
    let response = await chain.invoke({
                    input: question,
                  });
    let textResponse:any = response.content;
    
    addMessage(textResponse,'system');
  };

  const handleKeyPress = (event:any) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };
  
  const onSendMessage = (message:any) => {
    if (message.trim() !== '') {
      if (message === '') return;

      addMessage(message,'user');

      handleAskQuestion(message);
      setMessage('');
    }
  };

  const addMessage = (newMessage:string,type:string) => {
    setMessages((prevMessages:Message[]) => [...prevMessages, { type: type, message: newMessage }]);
  };

   
  return (
    <>
      <Layout title="ChatBot AI">

        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{mb:5}} >
          <Grid item xs={8}>
              <InputToken onValueChange={handleValueChange} onKeySuccess={handleKeyChange}/>
              <hr />
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="center" alignItems="center" >
          <Grid item xs={8}>
              <ChatBox messages={messages}/>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="center" alignItems="center" >
          <Grid item xs={8} sx={{position:'fixed',bottom: 10, width:'100%'}}>
              <TextField
                label="Batman Senior"
                variant="outlined"
                placeholder="Tienes dudas acerca de programacion? consulta con el Caballero de la noche"
                fullWidth
                multiline
                value={message}
                disabled={keyVerify}
                onChange={(e) => setMessage(e.target.value)}
                onKeyUp={handleKeyPress}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSendMessage} edge="end">
                        <SendOutlinedIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  maxHeight: 100,
                  overflow: 'auto',
                }}
              />
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
