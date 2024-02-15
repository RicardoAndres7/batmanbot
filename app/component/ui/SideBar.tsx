import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { Drawer,Box,Typography,List,ListItem,ListItemButton,ListItemIcon,ListItemText } from '@mui/material';

const menuItems: string[] = ['Token','Chat'];

export const SideBar = () => {
  return (
    <Drawer anchor='left' open={false} >
    {/* <Drawer anchor='left' open={true} onClose={ () => console.log('cerrando menu') }> */}
        <Box sx={{width:250}}>    
            <Box sx={{ padding: '5px 10px'}}>
                <Typography variant="h6" sx={{textAlign:'center'}}> Menu</Typography>
            </Box>

            <List>
                {
                    menuItems.map( (text,index) => ( //true is open
                        <ListItem key={text}  disablePadding sx={{ display: 'block' , justifyContent:'center'}}>
                            <ListItemButton sx={{ minHeight: 48, justifyContent: true ? 'initial' : 'center', px: 2.5, }}>
                                <ListItemIcon sx={{ minWidth: 0,mr: true ? 3 : 'auto',justifyContent: 'center',}}>
                                    { index % 2 ? <ForumOutlinedIcon/> : <VpnKeyOutlinedIcon/>}
                                </ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    </Drawer>
  )
}
