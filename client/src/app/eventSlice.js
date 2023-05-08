import {createSlice} from '@reduxjs/toolkit';


const eventSlice = createSlice({
    name:"event",
    initialState:[],
    reducers:{
        setEvent:(state,action)=>{
            return action.payload
        },
        filterEvent:(state,action)=>{
            
            state = state.filter((item)=>item.eventName === action.payload)
            return state
        }
    }
})

export const {setEvent,filterEvent} = eventSlice.actions
export default eventSlice.reducer