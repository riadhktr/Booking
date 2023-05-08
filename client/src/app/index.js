import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import eventSlice from "./eventSlice";
import ticketSlice from "./ticketSlice";


export default configureStore({
    reducer:{
        auth: authSlice,
        events: eventSlice,
        tickets: ticketSlice
    }
})