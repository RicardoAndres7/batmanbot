import { FC } from "react";
import Head from "next/head";
import { Box, Typography } from '@mui/material';
import { NavBar, SideBar } from '../ui';

interface Props {
    title?: string;
    children?:any;
}

export const Layout:FC<Props> = ({title='nose', children}) => {
  return (
    <Box sx={{ flexFlow: 1}}>
        <Head>
            <title>{title}</title>
        </Head>

        <NavBar/>
        <SideBar/>


        <Box sx={{padding:'10px 20px'}}>
            {children}
        </Box>
    </Box>
  )
}
