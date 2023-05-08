const express = require('express');
const app = express();
const port = 4000;
const dotenv= require('dotenv').config();
const connectDB = require('./config/connectDb');
const userRoutes = require('./routes/userRoute');
const cors = require('cors');
const eventRouter = require('./routes/eventRoutes');


connectDB();
app.use(express.json({extended: false}));
app.use( '/Public',express.static('Public'));


app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use('/api',userRoutes);
app.use('/api',eventRouter)

app.listen(port,(err)=>{
    (err)? console.log(err): console.log('server started with sucess')
})