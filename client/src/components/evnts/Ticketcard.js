
import React, { useRef } from 'react';
import QRCode from "react-qr-code";
import ReactToPrint from 'react-to-print';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TicketCard = ({ticket}) => {
  const componentRef = useRef();
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}  ref={componentRef}>
      <CardHeader
        title={ticket.eventInfo.eventName}
        subheader={ticket.eventInfo.eventDate}
      />
      <CardMedia
        component="img"
        height="194"
        image={`http://localhost:4000/Public/${ticket.eventInfo.eventImage}`}
        alt="Paella dish"
      />
      <CardContent>
       <h1>Number:00{ticket.ticketNumber}</h1>
       <h2>Location : {ticket.eventInfo.eventLocation}</h2>
       <h1>Owner:{ticket.orderBy.name}</h1>
      </CardContent>
    
      
      <div >
      <div style={{ background: 'white', padding: '16px' }}>
        <QRCode value={ticket._id} />
       </div>
    
       </div>
     
      
      
    </Card>
    <div>
    <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
    </div>
    </div>
  )
}

export default TicketCard