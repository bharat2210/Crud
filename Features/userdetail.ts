import { createSlice,createAsyncThunk,AnyAction } from "@reduxjs/toolkit";
import axios from 'axios';

https://file+.vscode-resource.vscode-cdn.net/c%3A/Users/wiznox-pc18/.vscode/extensions/ttoowa.in-your-face-incredible-1.1.0/assets/incredible1.png

interface User{
    _id:Number
    E_name:string;
    E_age:number;
    E_email:string
}

interface UserDetailstate{
    users:User[];
    isloading:boolean;
    error: string | null;
    searchdata:string[] | number[]
}
const initialState: UserDetailstate = {
    users: [],
    isloading: false,
    error: null,
    searchdata:[]
  };

   interface Createuserresponse{
    _id:Number
    E_name:string;
    E_age:number;
    E_email:string;
   }
   interface Data{
    _id:Number
    E_name:string;
    E_age:number;
    E_email:string
   }


// create action

export const createuser = createAsyncThunk<Createuserresponse, Data>(
  "createuser",
  async (data:{E_name:string,E_age:Number,E_email:string}, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/clientadd", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.message);
    }
  }
);

//   read action 
export const showuser=createAsyncThunk<Createuserresponse>("showuser",async(data,{rejectWithValue})=>{
   
    try{
      const response=await axios.get("http://localhost:3000/api/clientget",{
        headers:{
            "Content-Type":"application/json",
        },
      });
       return response.data
    
        
    }catch(error:any){
        return rejectWithValue(error.messagee)

    }

}

);

// delete action
 export const deleteuser=createAsyncThunk("deleteuser",async(id:number | undefined,data)=>{
  
    try{
      const response= await axios.delete(`http://localhost:3000/api/clientdelete?id=${id}`,{
     
    })
    return response.data
       
    }catch(error){
        return error
    }
})

// update action
export const updateuser=createAsyncThunk("updateuser",async(data:any)=>{
    const{id, ...userdata}=data;
    console.log("userdata is ", userdata)
    console.log("data is", data)
    try {
      const response = await axios.put(
        `http://localhost:3000/api/clientupdate?id=${id}`,
        userdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      return response.data;
    } catch (error) {
      return error;
    }
})










  const userdetail = createSlice({
    name: 'userdetail',
    initialState,
    reducers: {
      searchuserata:(state,action)=>{
        console.log(action.payload);
        state.searchdata=action.payload;
      }
     
    },
    extraReducers: (builder)=>{
       builder
       .addCase(createuser.pending, (state)=>{
        state.isloading=true;
       })
       .addCase(createuser.fulfilled,(state:any,action)=>{
        state.isloading=false;
        state.users.push(action.payload)
       })
       .addCase(createuser.rejected,(state:any,action:AnyAction)=>{
        state.isloading=false;
        state.error=action.payload.message || null
       })
       .addCase(showuser.pending,(state)=>{
        state.isloading=true;
       })
       .addCase(showuser.fulfilled,(state:any,action)=>{
        state.isloading=false;
        state.users=action.payload;
       })
       .addCase(showuser.rejected,(state:any,action)=>{
        state.isloading=false;
        state.error=action.payload
       })
      .addCase(deleteuser.pending,(state)=>{
        state.isloading=true;
      })
      .addCase(deleteuser.fulfilled,(state,action)=>{
        state.isloading=false;
        const {id}=action.payload
        console.log("action ", id)
     
        if(id){
            state.users=state.users.filter((details)=>details._id!==id)
        }
  
        
      })
      .addCase(deleteuser.rejected,(state:any,action)=>{
        state.isloading=false;
        state.error=action.payload
      })
      .addCase(updateuser.pending,(state)=>{
        state.isloading=true;
      })
      .addCase(updateuser.fulfilled,(state,action)=>{
        state.isloading=false;
        const updateduser=action.payload;
        console.log("action",action.payload)
        const index = state.users.findIndex((user) => user._id === updateduser._id);
        console.log("user.id", index)
        state.users[index]=updateduser
        console.log("index is", index)

     
      })
      .addCase(updateuser.rejected,(state:any,action)=>{
        state.isloading=false;
        state.error=action.payload
      })


        
    }
  });
  export default userdetail.reducer;
  export const { searchuserata }=userdetail.actions;