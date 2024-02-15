'use client';

import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material";


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const roboto = Roboto({
    weight:['300','400','500','700'],
    subsets:['latin'],
    display: 'swap'
});

const theme = createTheme({
    palette: {
    //   mode: 'light',
      mode: 'dark', //
      primary:{
          main: '#2563eb'
      },
      secondary:{
          main: '#e11d48'
      },
      error:{
          main: '#dc2626'
      },
      success:{
          main: '#059669'
      }
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
    components: {
      MuiAlert: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.severity === 'info' && {
              backgroundColor: '#60a5fa',
            }),
          }),
        },
      },
      MuiAppBar: {
        defaultProps: {
          elevation:0
        },
        styleOverrides: {
          root: ({ ownerState }) => ({
            backgroundColor: '#2563eb',
          }),
        }
      }
    },
  });


  export default theme;

// #007FFF azul
// #00CC66 verde
// #FF9900 naranja
// #FF0000 rojo
// #1C344D negro