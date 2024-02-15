import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface MessageProps {
  message:string
}

const AssistantChat:React.FC<MessageProps> = ({message = ''}) => {
  return (
    <Box sx={{ maxWidth:'30vw',margin:'15px',marginRight:'auto' }}>
      <Card variant="outlined" sx={{ backgroundColor: '#212121' }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom textAlign={"start"}>
              <b>Batman:</b>
            </Typography>
            <Typography variant="body2" component="div"  textAlign={"justify"}>
              {message}
              {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique veniam neque tempora perferendis corporis modi exercitationem voluptate, alias ab quo odio recusandae accusamus, a magni, quae natus sint perspiciatis libero. */}
            </Typography>
          </CardContent>
        </Card>
    </Box>
  );
}

export default AssistantChat;
