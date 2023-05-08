const eventSchema= require('../models/event');
const userSchema= require('../models/userModel');



//add new book
exports.addEvent= async(req,res)=>{
    const img = req.file.filename;
        console.log(img);
    try{
        const {eventName,eventTickets,eventLocation,VipTickets,normalTickets,
            comercialAvailble,eventDate, eventDescription}=req.body;
       
        // const newEvent = await new eventSchema({
        //     eventName,
        //     eventTickets,
        //     eventLocation,
        //     VipTickets,
        //     normalTickets,
        //     comercialAvailble,
        //     eventDate,
        //     eventImage:img, 
        //     eventDescription,

        // })
        // //  newEvent.save()
        // console.log(newEvent);
        res.status(200).json({message:'event added to database',newEvent})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'cannot add this event'})
    }
}

