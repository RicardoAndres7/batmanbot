import { TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { ChatOpenAI } from "@langchain/openai";


interface CustomInputProps {
    onValueChange: (newValue: string) => void;
    onKeySuccess: (keySuccess: boolean) => void;
}

export const InputToken:React.FC<CustomInputProps> = ({ onValueChange,onKeySuccess }) => {

    const [isApiResponseSuccess, setIsApiResponseSuccess] = useState(false);

    const handleChange = async(event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        
        if (inputValue.length > 50) {
            try 
            {
                const chatModel = new ChatOpenAI({
                    openAIApiKey: inputValue,
                });
                let response = await chatModel.invoke("respond PONG");
              
              if (response.content) {
                onValueChange(inputValue);
                setIsApiResponseSuccess(true);
                onKeySuccess(isApiResponseSuccess);
              } else {
                  setIsApiResponseSuccess(false);
                  onKeySuccess(isApiResponseSuccess);
              }
            } catch (error) {
                console.log('error',error);
                setIsApiResponseSuccess(false);
                onKeySuccess(isApiResponseSuccess);
            }
          } 
          else 
          {
              setIsApiResponseSuccess(false);
              onKeySuccess(isApiResponseSuccess);
          }
    };
    
    return (
        <>
            <TextField
                id="outlined-password-input"
                label="Agrega tu Key"
                type="password"
                autoComplete="current-password"
                fullWidth
                onChange={handleChange}
                error={!isApiResponseSuccess}
                helperText="Introduce una key correcta y batalla de la mano con batman contra los bugs."
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                             {isApiResponseSuccess ? <CheckCircleOutlinedIcon color="success" /> : <ErrorOutlinedIcon color="error" />}
                      </InputAdornment>
                    ),
                }}
            />
        </>

        
    )
}
