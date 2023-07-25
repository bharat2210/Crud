import { AnyAction, createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface request{
    _id:number;
    firstname: string;
    lastname: string;
    email:string;
    message:string;

}

interface MessageState{
    Messages:request[];
    isloading: boolean;
    error: string | null;
}

const initialState:MessageState={
    Messages:[],
    isloading:false,
    error:null
}


// Get messages action
export const getmessages=createAsyncThunk("getmessages",async(data)=>{
   try{
    const response = await axios.get("http://localhost:3000/api/getmessages",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
        }
    })
    return response.data
   }catch(error){
    throw new Error("Unable to get messages")
   }
});

// create messages action
export const createmessages=createAsyncThunk("createmessages",async(data)=>{
    try{
     const response = await axios.post("http://localhost:3000/api/createmessage",data,{
         method:"POST",
         headers:{
             "Content-Type":"application/json",
         }
     })
     return response.data
    }catch(error){
     throw new Error("Unable to get messages")
    }
 });

//  Delete message action
export const deletemessage=createAsyncThunk("deletemessage",async(id,data)=>{
    // console.log("id of message ",id)
    try{
        const response= await axios.delete(`http://localhost:3000/api/deletemessage?id=${id}`) 
        return response.data
    }catch(error){
      throw new Error("Error in deleting message")
    }
})

//  Format messages action
export const formatmessages=createAsyncThunk("formatmessages",async(data)=>{
    try{
        let response = await axios.delete("http://localhost:3000/api/formatmessages",{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            }
           
        })
        return response.data
    }catch(error){
        throw new Error("Can't format messages")
    }
})


  const messageSlice=createSlice({
    name:"messageSlice",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
      builder
      .addCase(getmessages.pending,(state,action)=>{
        state.isloading=true;
      })
      .addCase(getmessages.fulfilled,(state,action)=>{
        state.isloading=false;
        state.Messages=action.payload;
      })
      .addCase(getmessages.rejected,(state,action:AnyAction)=>{
        state.isloading=false;
        state.error=action.payload.message || null ;
      })
      .addCase(createmessages.pending,(state,action)=>{
        state.isloading=true;
      })
      .addCase(createmessages.fulfilled,(state,action)=>{
        state.isloading=false;
        state.Messages.push(action.payload);
      })
      .addCase(createmessages.rejected,(state,action:AnyAction)=>{
        state.isloading=false;
        state.error=action.payload.message || null ;
      })
      .addCase(formatmessages.pending,(state,action)=>{
        state.isloading=true;
      })
      .addCase(formatmessages.fulfilled,(state,action)=>{
        state.isloading=false;
        state.Messages=[]
      })
      .addCase(formatmessages.rejected,(state,action:AnyAction)=>{
        state.isloading=false;
        state.error=action.payload.message || null
      })
      .addCase(deletemessage.pending,(state,action)=>{
        state.isloading=true;
      })
      .addCase(deletemessage.fulfilled,(state,action)=>{
        state.isloading=false;
        state.Messages=state.Messages.filter((data)=> data._id !== action.payload);
      
      })
      .addCase(deletemessage.rejected,(state,action:AnyAction)=>{
        state.isloading=false;
        state.error= null;
      })
    }
 });
 export default messageSlice.reducer;