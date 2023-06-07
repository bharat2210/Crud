import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  users: User | null;
  isLoading: boolean;
  error: string | null;
}

interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}
interface LoginCredentials {

  email: string;
  password: string;
}

export const registerUser = createAsyncThunk('auth/registerUser', async (values: RegisterCredentials) => {
  const response = await axios.post<User>('http://localhost:3001/users', values);
  return response.data;
});
export const loginuser=createAsyncThunk('auth/Loginuser',async(Loginvalues:LoginCredentials)=>{
    const response=await axios.get('http://localhost:3001/users');
    console.log("response is",response)
    console.log("login",Loginvalues)
   const alldata =response.data
   console.log("all data is",alldata)
   const user=alldata.find((u:any)=>u.email===Loginvalues.email && u.password===Loginvalues.password)

   return user || null
  
   


   
  
   

})

const initialState: AuthState = {
  users: null,
  isLoading: false,
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error=action.error.message || "Registeration failde"
    
      })
      .addCase(loginuser.pending,(state)=>{
        state.isLoading=true;
      })
      .addCase(loginuser.fulfilled,(state,action)=>{
        state.isLoading=false;
        state.users=action.payload;
      })
      .addCase(loginuser.rejected,(state,action)=>{
        state.isLoading=false;
        state.error=action.error.message || "Login Failed"
      })
  }
});

export default authSlice.reducer;

