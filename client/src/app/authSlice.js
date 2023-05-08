import {createSlice} from '@reduxjs/toolkit';


const authSlice = createSlice({
    name:"authentification",
    initialState:[{
        name:"user"
    }],
    reducers:{
        setUser:(state,action)=>{
            return action.payload
        }
    }
})

export const {setUser} = authSlice.actions
export default authSlice.reducer