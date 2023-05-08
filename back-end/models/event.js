const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: String,
    eventTickets: Number,
    eventLocation: String,
    VipTickets: {
        price:{
            type:Number
        },
        qty:{
            type:Number
        }
    },
    normalTickets: {
        price:{
            type:Number
        },
        qty:{
            type:Number
        }
    },
    eventDate:{
    type: Date
    
    },
    eventImage: String,
    categorie:String,
    eventDescription: String,
    tickets:[{
        ticket:{type: mongoose.Schema.Types.ObjectId, ref: "Ticket" }
    }]
    
})

module.exports = mongoose.model('Event',eventSchema)