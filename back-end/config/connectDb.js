const mongoose = require('mongoose');


const URI= process.env.Mongo_URI;

const connectDB = async()=>{
    await mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('database connected')
    }).catch((err)=>{
        console.log(err)
    })

} 

module.exports = connectDB