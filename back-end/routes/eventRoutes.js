const express = require('express');
const multer  = require('multer');
const { authMiddleware } = require('../midellwares/authMiddleware');
const { getEvents, getEventWithId } = require('../controllers/user');

const eventSchema = require('../models/event')

const eventRouter = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './Public')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  });

  const fileFilter=(req, file, cb)=>{
   if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
       cb(null,true);
   }else{
       cb(null, false);
   }

  }

 const upload = multer({ 
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 * 5
    },
    fileFilter:fileFilter
 });

eventRouter.post('/addEvent', authMiddleware,upload.single('picture'),async(req,res)=>{
   
try{
    const img = req.file.filename;
    console.log(img);
    const {eventName,eventTickets,eventLocation,VipTickets,normalTickets,
        comercialAvailble,eventDate, eventDescription,categorie}=req.body;
        
   
    const newEvent = await new eventSchema({
        eventName,
        eventTickets,
        eventLocation,
        VipTickets,
        normalTickets,
        comercialAvailble,
        eventDate,
        categorie,
        eventImage:img, 
        eventDescription,

    })
     newEvent.save()
    console.log(newEvent);
    res.status(200).json({message:'event added to database',newEvent})
}
catch(error){
    console.log(error);
    res.status(500).json({message:'cannot add this event'})
}
});
// Get all events 
eventRouter.get('/events',getEvents);
// Get event by _id
eventRouter.get('/event/:id',authMiddleware,getEventWithId);


module.exports = eventRouter