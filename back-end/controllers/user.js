const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = require('../models/userModel');
const ticketSchema = require('../models/ticket');
const eventSchema = require('../models/event')

// register 

exports.register = async(req,res)=>{
try{
const {name,email,password} = req.body;
// test sur l'existance de l'email
const exist = await userSchema.findOne({email});
if(exist){
    return res.status(400).json({msg:"email adress already used "})
}

// creation du compte
 const newUser = await new userSchema(req.body);
 const saltRounds = 10;
 const salt = bcrypt.genSaltSync(saltRounds);
 const hash = bcrypt.hashSync(password,salt);
 newUser.password = hash;
 // creation du token 
 const payload = {id : newUser._id};
 var token = jwt.sign(payload,process.env.Private_key);
 newUser.save();
 res.status(200).json({msg:"user created with sucess",newUser});

}catch(err){
res.status(500).json({msg:"you can't create an account now"})
}
}

exports.allUsers = async(req,res)=>{
    try{
    const users = await userSchema.find();
    res.status(200).json({msg:'list of users',users})
    }catch(err){
res.status(500).json({msg:"server error"})
    }
}

// login 

exports.login = async(req,res)=>{
    try{
        const{email,password} = req.body;
        const found = await userSchema.findOne({email});
        if(!found){
            return res.status(400).json({msg:"no account with this email"})
        }
        // found true 
        const match = await bcrypt.compare(password,found.password);
        if(!match){
            return res.status(400).json({msg:"invalid credantials"})
        }
        const payload = {id: found._id};
        const token = jwt.sign(payload,process.env.Private_key);
       res.status(200).json({msg:"user logged in with sucess",token,found})
    }catch(err){
    res.status(500).json({msg:"server error"})
    }
}


exports.createTicket= async(req,res)=>{

    const {_id} = req.user;
    const eventId = req.params;
    const {quantity,categorie} =req.body
    // console.log(quantity,categorie);
    // console.log(eventId)
    try{
        const event = await eventSchema.findById({_id:eventId.id}); // tala3et evenement
        const user = await userSchema.findById({_id}); // 3rafet el user
        for(let i=0; i<quantity ;i++){
          
            let newTicket = await ticketSchema.insertMany([{
                ticketNumber:event.tickets.length + 1+i,
                categorie,
                orderBy: user?._id,
                eventInfo:event?._id
              }])
              const updateEvent= await event.updateOne({$push:{tickets:newTicket}})
            //   console.log('updated event',updateEvent);       
               
        }
        
        if(categorie === "vip"){
            const vipQty = await event.updateOne({$inc:{"VipTickets.qty":-quantity}})
        }else if(categorie === "normal"){
            const normalQty = await event.updateOne({$inc:{"normalTickets.qty":-quantity}})

        }
       
        res.status(200).json({message:'ticket sold '}) 
        
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'cannot add this event'})
    }
}
 exports.getTickets=async(req,res)=>{
    const {_id} = req.user;

    try{
    
     const tickets = await ticketSchema.find({orderBy:_id}).populate("orderBy")
     .populate("eventInfo")
     res.status(200).json({msg:"My list of tickets",tickets})
    }catch(err){
    res.status(500).json({msg:"server error"})
    }
 }
 exports.getEvents=async(req,res)=>{
   

    try{
    
     const events = await eventSchema.find()
     res.status(200).json({msg:"lost of events",events})
    }catch(err){
    res.status(500).json({msg:"server error"})
    }
 }

 exports.getEventWithId=async(req,res)=>{
   
    const {id} = req.params

    try{
    
     const event = await eventSchema.find({_id:id})
     res.status(200).json({msg:"my event",event})
    }catch(err){
    res.status(500).json({msg:"server error"})
    }
 }


    

