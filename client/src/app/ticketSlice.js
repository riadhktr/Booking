import { createSlice } from "@reduxjs/toolkit";


const ticketSlice = createSlice({
    name:"MyTickets",
    initialState:[],
    reducers:{
        setTickets:(state,action)=>{
            return action.payload
        }
    }
})

export const {setTickets} = ticketSlice.actions;
export default ticketSlice.reducer;