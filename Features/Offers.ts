import { AnyAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { add, update } from "lodash";

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
// Add offers
export const addoffers=createAsyncThunk("addoffers",async(data:{imgPath:string})=>{
    console.log("dataoffer",data)
    try{
        const response= await axios.post("http://localhost:3000/api/addoffers",data,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            }
        });
        return response.data;
    }catch(error){
        throw new Error("Error in Adding Offer")
    }
})
// Delete offer
export const deleteoffer=createAsyncThunk("deleteoffer",async(id:number,data)=>{
    try{
        const response= await axios.delete(`http://localhost:3000/api/offerdelete?id=${id}`)
        return response.data
    }catch(error){
        throw new Error("Error in deleting offer")
    }
})
// Update offer
export const updateoffer=createAsyncThunk("updateoffer",async(data:{id:{id:number},updateoffer:{imgPath:string}})=>{
    const{id, ...updatedOffer}:any=data
    try{
        const response = await axios.put(`http://localhost:3000/api/updateoffer?id=${id}`,updatedOffer)
        return response.data
    }catch(error){
        throw new Error("Error in Updating offer")
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
    .addCase(addoffers.pending,(state,action:AnyAction)=>{
      state.isloading=true;
     
    })
    .addCase(addoffers.fulfilled,(state,action)=>{
        state.isloading=false;
        state.offers.push(action.payload);
    })
    .addCase(addoffers.rejected,(state,action)=>{
        state.isloading=false;
        alert("Error in adding Offer")
    })
    .addCase(deleteoffer.pending,(state,action)=>{
        state.isloading=true;
    })
    .addCase(deleteoffer.fulfilled,(state,action)=>{
        state.isloading=false;
        state.offers=state.offers.filter((data)=>data._id !== action.payload)
    })
    .addCase(deleteoffer.rejected,(state,action)=>{
        state.isloading=false;
        alert("Error in deleting offer")
    })
    .addCase(updateoffer.pending,(state,action)=>{
        state.isloading=true;
    })
    .addCase(updateoffer.fulfilled,(state,action)=>{
        state.isloading=false;
        const updateOfferActionPayload=action.payload
        const index= state.offers.findIndex((data)=>data._id === updateOfferActionPayload._id)
        state.offers[index]=updateOfferActionPayload
    })
    .addCase(updateoffer.rejected,(state,action)=>{
        state.isloading=false;
        alert("Error in Updating Offer")
    })
    }
})
export default OfferSlice.reducer;