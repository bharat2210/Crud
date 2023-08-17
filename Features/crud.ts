import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { update } from "lodash";


interface people{
    _id:number;
    name:string;
    age:number;
    email:string;

}

interface PeopleState{
    peoples:people[]
    isloading:boolean;
    error:string | null;
}

const initialState: PeopleState ={
    peoples:[],
    isloading:false,
    error:null
}
// Add action 
export const addperson=createAsyncThunk("addperson",async(data:{name:string,age:number,email:string})=>{
    try{
        const response= await axios.post('http://localhost:3000/api/Peopleadd',data)
        return response.data
    }catch(error){
        throw new Error("Error creating People")
    }
})
// Get action
export const getPerson=createAsyncThunk("getPerson",async(data)=>{
    try{
        const response= await axios.get('http://localhost:3000/api/Peopleread')
        return response.data
    }catch(error){
        throw new Error("Error in Getting Peoples")
    }
})

// Delete person

export const deleteperson=createAsyncThunk("deleteperson",async(id:number,data)=>{
    try{
        const response= await axios.delete(`http://localhost:3000/api/Peopledelete?id=${id}`)
        return response.data
    }catch(error){
        throw new Error("Error in deleting")
    }

})

// Update person
export const updatePerson=createAsyncThunk("updatePerson",async(data)=>{
    const {id,...newData}:any=data
    try{
        const response= await axios.put(`http://localhost:3000/api/Peopleupdate?id=${id}`,newData)
        return response.data
    }catch(error){
        throw new Error("Error in Updating Person")
    }
})

const PeopleSlice=createSlice({
    name:"PeopleSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(addperson.pending,(state,action)=>{
            state.isloading=true;
        })
        .addCase(addperson.fulfilled,(state,action)=>{
            state.isloading=false;
            state.peoples.push(action.payload)
        })
        .addCase(addperson.rejected,(state,action)=>{
            state.isloading=false;
            alert("Error in adding person")
        })
        .addCase(getPerson.pending,(state,action)=>{
            state.isloading=true;
        })
        .addCase(getPerson.fulfilled,(state,action)=>{
            state.isloading=false;
            state.peoples= action.payload;
        })
        .addCase(getPerson.rejected,(state,action)=>{
            state.isloading=false;
            alert("Error in getting people")
        })
        .addCase(deleteperson.pending,(state,action)=>{
            state.isloading=true;
        })
        .addCase(deleteperson.fulfilled,(state,action)=>{
            state.isloading=false;
            const {id}=action.payload
            state.peoples=state.peoples.filter((data)=>data._id !== id)
        })
        .addCase(deleteperson.rejected,(state,action)=>{
            state.isloading=false;
            alert("Error in deleting Person")
        })
        .addCase(updatePerson.pending,(state,action)=>{
            state.isloading=true;
        })
        .addCase(updatePerson.fulfilled,(state,action)=>{
            state.isloading=false;
            const UpdatedData=action.payload
            const index=state.peoples.findIndex((data)=>data._id === UpdatedData._id)
            state.peoples[index]=UpdatedData;
        })
        .addCase(updatePerson.rejected,(state,action)=>{
            state.isloading=false;
            alert("Error in Updating Person")
        })
    }
})
export default PeopleSlice.reducer