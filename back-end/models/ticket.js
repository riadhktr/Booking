const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    ticketNumber: Number,
    categorie:String,
    orderBy:{
        type: mongoose.Schema.Types.ObjectId, ref: "user" 
    },
    eventInfo:{
        type: mongoose.Schema.Types.ObjectId, ref: "Event"  
    }
})

module.exports = mongoose.model('Ticket',ticketSchema)