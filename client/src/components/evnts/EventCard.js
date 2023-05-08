import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function EventCard({event}) {
  const theme = useTheme();
  const navigate = useNavigate()
  return (
    <Card sx={{ display: 'flex',flexWrap:"wrap" }}>
        <Box>
        <CardMedia
        component="img"
        sx={{ width: 230,height:350 }}
        image={`http://localhost:4000/Public/${event.eventImage}`}
        alt="event cover"
      />
        </Box>
      <Box sx={{ width: 230,height:350 }} style={{display:"flex", flexDirection:"column",justifyContent:"space-around"}}>
      
        <CardContent style={{display:"flex",flexDirection:"column"}}>
          <Typography  component="div" variant="h5">
            {event.eventName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           {event.eventLocation}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           {event.eventDate.split('').splice(0,10)}
          </Typography>
        </CardContent>
        <Box >
         from {event.normalTickets.price} to {event.VipTickets.price}<ConfirmationNumberIcon/>
        </Box>
        <Box>
          {(event.tickets.length>2)? <Button variant="outlined" disabled>epuiser</Button>:<Button variant="outlined" onClick={()=>navigate(`/booking/${event._id}`)}>Booking</Button> }
        
        </Box>
      </Box>
     
    </Card>
  );
}