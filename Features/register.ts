import { createSlice, createAsyncThunk,AnyAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
interface UserDetail {
  rusers: User[];
  isloading: boolean;
  error: string | null;
}

const initialState: UserDetail = {
  rusers: [],
  isloading: false,
  error: null,
};
interface Createuserresponse {
  id: number;
  name: string;
  email: string;
  password: string;
}
interface UpdateUserRejectedPayload {
    message: string;
    // Other properties if applicable
  }

// Read action
export const readuser = createAsyncThunk<Createuserresponse>(
  "readuser",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get("http://localhost:3001/users", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.messagee);
    }
  }
);

// delete action
export const deleteuser = createAsyncThunk(
  "deleteuser",
  async (id: number, data) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/users/${id}`,
        {}
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

// update action
export const updateuser = createAsyncThunk("updateuser", async (data: any) => {
  const { id, ...userdata } = data;
  try {
    const response = await axios.put(
      `http://localhost:3001/users/${id}`,
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
});

const ruserdetail = createSlice({
  name: "ruserdetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(readuser.pending, (state) => {
        state.isloading = true;
      })
      .addCase(readuser.fulfilled, (state, action:AnyAction) => {
        state.isloading = false;
        state.rusers = action.payload;
      })
      .addCase(readuser.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload.message || "Can't find users";
      })
      .addCase(deleteuser.pending, (state) => {
        state.isloading = true;
      })
      .addCase(deleteuser.fulfilled, (state, action) => {
        state.isloading = false;
        const { id } = action.payload;

        if (id) {
          state.rusers = state.rusers.filter((element) => element.id !== id);
        }
      })
      .addCase(deleteuser.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(updateuser.pending, (state) => {
        state.isloading = true;
      })
      .addCase(updateuser.fulfilled, (state, action) => {
        state.isloading = false;
        const updateduser = action.payload;
        console.log("action", action.payload);
        const index = state.rusers.findIndex(
          (user) => user.id === updateduser.id
        );

        state.rusers[index] = updateduser;
      })
      .addCase(updateuser.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload.message || "Error";
      });
  },
});

export default ruserdetail.reducer;
