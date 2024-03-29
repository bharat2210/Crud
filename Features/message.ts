import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { update } from "lodash";

interface request {
  _id: number;
  firstname: string;
  lastname: string;
  email: string;
  message: string;
  date: string;
}

interface MessageState {
  Messages: request[];
  isloading: boolean;
  error: string | null;
}

const initialState: MessageState = {
  Messages: [],
  isloading: false,
  error: null,
};

// Get messages action
export const getmessages = createAsyncThunk("getmessages", async (data) => {
  try {
    const response = await axios.get("http://localhost:3000/api/getmessages", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Unable to get messages");
  }
});

// create messages action
export const createmessages = createAsyncThunk(
  "createmessages",
  async (
    data: {
      firstname: string;
      lastname: string;
      email: string;
      message: string;
      date: string;
    },
    { rejectWithValue }
  ) => {
    const response = await axios.post(
      "http://localhost:3000/api/createmessage",
      data
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return rejectWithValue(response.data);
    }
  }
);

//  Delete message action
export const deletemessage = createAsyncThunk(
  "deletemessage",
  async (id: Number, data) => {
    // console.log("id of message ",id)
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/deletemessage?id=${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Error in deleting message");
    }
  }
);

//  Format messages action
export const formatmessages = createAsyncThunk(
  "formatmessages",
  async (data) => {
    try {
      let response = await axios.delete(
        "http://localhost:3000/api/formatmessages",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Can't format messages");
    }
  }
);

// Update message from client side
export const updatemessage = createAsyncThunk(
  "updatemessage",
  async (data: {id:{_id:number}
  
    QueryData: {
      firstname: string;
      lastname: string;
      email: string;
      message: string;
      date: string;
    };
  }) => {
    const { id, ...updata } = data;
    try {
      const response = await axios.put(
        `http://localhost:3000/api/editQuery?id=${id}`,
        updata,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Error in updating");
    }
  }
);

const messageSlice = createSlice({
  name: "messageSlice",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getmessages.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(getmessages.fulfilled, (state, action) => {
        state.isloading = false;
        state.Messages = action.payload;
      })
      .addCase(getmessages.rejected, (state, action: AnyAction) => {
        state.isloading = false;
       alert("Error in getting messages");
      })
      .addCase(createmessages.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(createmessages.fulfilled, (state, action) => {
        state.isloading = false;
        state.Messages.push(action.payload);
      })
      .addCase(createmessages.rejected, (state, action: AnyAction) => {
        state.isloading = false;
        alert("Error in sending message")
      })
      .addCase(formatmessages.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(formatmessages.fulfilled, (state, action) => {
        state.isloading = false;
        state.Messages = [];
      })
      .addCase(formatmessages.rejected, (state) => {
        state.isloading = false;
        alert("Error in formatting messages")
      })
      .addCase(deletemessage.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(deletemessage.fulfilled, (state, action) => {
        state.isloading = false;
        state.Messages = state.Messages.filter(
          (data) => data._id !== action.payload
        );
      })
      .addCase(deletemessage.rejected, (state) => {
        state.isloading = false;
       alert("Error in deleting message")
      })
    .addCase(updatemessage.pending,(state,action)=>{
      state.isloading=true;
    })
    .addCase(updatemessage.fulfilled,(state,action)=>{
      state.isloading=false;
      const updateddata=action.payload
      const index= state.Messages.findIndex((data)=>data._id === updateddata._id);
      state.Messages[index] = updateddata
    })
    .addCase(updatemessage.rejected,(state,action)=>{
      state.isloading=false;
      alert("Error in updating message");
    })
  },
});
export default messageSlice.reducer;
