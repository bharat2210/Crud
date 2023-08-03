import { AnyAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
  pincode:null,
  error:null
  
}

export const pinapi=createAsyncThunk("pinapi",async(pincode:number)=>{
    try{
        const response= await axios.get(`https://api.postalpincode.in/pincode/${pincode}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        return response.data
    }catch(error){
        throw new Error("Invalid Code")
    }
})

 const pinslice=createSlice({
    name:"pinslice",
    initialState,
    reducers:{},
    extraReducers(builder) {
       builder
       .addCase(pinapi.pending,(state,action)=>{
        state.error=null;
        state.pincode=null;
       }) 
       .addCase(pinapi.fulfilled,(state,action)=>{
        state.error=null;
        state.pincode=action.payload
       })
       .addCase(pinapi.rejected,(state,action:AnyAction)=>{
        state.error=action.payload.message
        alert(action.payload.message)
       })
    },
})
export default pinslice.reducer
  
