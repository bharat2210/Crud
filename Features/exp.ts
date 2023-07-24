import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


interface Demo {
  _id: number;
  name: string;
  age: number;
  email: string;
}

interface Authstate {
  demouser: Demo[];
  isloading: boolean;
  error: string | null;
  searchusername: string;
}

// Get action
export const getdemo = createAsyncThunk("getdemo", async (data) => {
  try {
    const response = await axios.get("http://localhost:3000/api/read1", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
});


// Add action
export const adddemo = createAsyncThunk("adddemo", async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/api/add1", data, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
});
// DELETE action
export const deleteDemo = createAsyncThunk("deleteDemo", async (id, data) => {
  console.log("id", id);
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/delete1?id=${id}`
    );

    return response.data;
  } catch (error) {
    return error;
  }
});
// Update action
export const updateDemo = createAsyncThunk("updateDemo", async (data) => {
  const { id, ...payloaddata } = data;
  try {
    let response = await axios.put(
      `http://localhost:3000/api/update1?id=${id}`,
      payloaddata,
      {}
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

const initialState: Authstate = {
  demouser: [],
  isloading: false,
  error: null,
 
  searchusername:""
};

const demoslice = createSlice({
  name: "demoslice",
  initialState,
  reducers: {
    searchuser:(state,action)=>{
      state.searchusername=action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getdemo.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(getdemo.fulfilled, (state, action) => {
        state.isloading = false;
        state.demouser = action.payload;
      })
      .addCase(getdemo.rejected, (state, action: AnyAction) => {
        state.isloading = false;
        state.error = action.payload.message || null;
      })
      .addCase(adddemo.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(adddemo.fulfilled, (state, action) => {
        state.isloading = false;
        state.demouser?.push(action.payload);
      })
      .addCase(adddemo.rejected, (state, action: AnyAction) => {
        state.isloading = false;
        state.error = action.payload.message || null;
      })
      .addCase(deleteDemo.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(deleteDemo.fulfilled, (state, action) => {
        state.isloading = false;
      })
      .addCase(deleteDemo.rejected, (state, action: AnyAction) => {
        state.isloading = false;
        state.error = action.payload.message || null;
      })
      .addCase(updateDemo.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(updateDemo.fulfilled, (state, action) => {
        state.isloading = false;
      })
      .addCase(updateDemo.rejected, (state, action: AnyAction) => {
        state.isloading = false;
        state.error = action.payload.message || null;
      })
      // .addCase(getcode.pending,(state, action) => {
      //   state.isloading=true;
      //   state.error=null;
      //   state.pincodedata=null;
      // })
      // .addCase(getcode.fulfilled,(state,action)=>{
      //   state.isloading=false;
      //   state.pincodedata=action.payload;
      //   state.error=null
      //   console.log(action.payload)
      
      // })
      // .addCase(getcode.rejected,(state,action)=>{
      //   state.isloading=false;
      //   state.pincodedata=null;
      //   state.error=action.error.message
    
      // })
  },
});
export default demoslice.reducer;
export const {searchuser}=demoslice.actions
