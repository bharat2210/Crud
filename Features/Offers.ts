import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface OfferType{
    _id:number;
  imgPath: string;
}
interface Offerstate{
    offers:OfferType[]
    isloading:boolean
    error:string | null;
}

// Get offers
export const getoffers=createAsyncThunk("getoffers",async(data)=>{
    try{
        const response = await axios.get("http://localhost:3000/api/getoffers")
        return response.data
    }catch(error){
        throw new Error("Error getting offers")
    }
})

const initialState:Offerstate = {
    offers:[],
    isloading:false,
    error:null
}

const OfferSlice=createSlice({
    name:"OfferSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
    builder
    .addCase(getoffers.pending,(state,action)=>{
        state.isloading=true;
    })
    .addCase(getoffers.fulfilled,(state,action)=>{
        state.isloading=false;
        state.offers=action.payload
    })
    .addCase(getoffers.rejected,(state,action)=>{
        state.isloading=false;
        alert("Error in getting offers")
    })

    }
})
export default OfferSlice.reducer;