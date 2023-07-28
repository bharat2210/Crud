import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ImageType {
   _id:number;
  imgPath: string;
  title: string;
}

interface Imgstate {
  images: ImageType[];
  isloading: boolean;
  error: string | null;
}
const initialState: Imgstate = {
  images: [],
  isloading: false,
  error: null,
};
// Get images
export const getImages = createAsyncThunk("getImages", async (data) => {
  try {
    const response = await axios.get("http://localhost:3000/api/getImage");
    return response.data;
  } catch (error) {
    throw new Error("Error getting images");
  }
});
// Delete image
export const deleteImage = createAsyncThunk("deleteImage", async (id, data) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/imagedelete?id=${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error in deleting");
  }
});
// Add images
export const addImages = createAsyncThunk("addImages", async(data) => {
    // console.log("data of image",data)
  try {
    const response = await axios.post(
      "http://localhost:3000/api/addimage",
      data,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error in adding image");
  }
});

// Update image
export const updateImageapi = createAsyncThunk("updateImageapi", async(data)=>{
  const{id,...updatedImage}:any=data
  console.log("updated image data",data)
  try{
    const response= await axios.put(`http://localhost:3000/api/updateImage?id=${id}`,updatedImage,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json"
      }
    })
    return response.data
  }catch(error){
    throw new Error("Error in updating")
  }
})

const imgSlice = createSlice({
  name: "imgSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.isloading = false;
        state.images = action.payload;
      })
      .addCase(getImages.rejected, (state, action: AnyAction) => {
        state.isloading = false;
        state.error = action.payload.message || null;
      })
      .addCase(deleteImage.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(deleteImage.fulfilled, (state, action) => {
        state.isloading = false;
        state.images = state.images.filter(
          (data) => data._id !== action.payload
        );
      })
      .addCase(deleteImage.rejected, (state, action) => {
        state.isloading = false;
        alert("Error in deleting image");
      })
      .addCase(addImages.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(addImages.fulfilled, (state, action) => {
        state.isloading = false;
        state.images.push(action.payload);
      })
      .addCase(addImages.rejected, (state, action: AnyAction) => {
        state.isloading = false;
        state.error = action.payload.message || null;
      })
      .addCase(updateImageapi.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(updateImageapi.fulfilled, (state, action) => {
        state.isloading = false;
        const updateimagedata=action.payload;
      const index=state.images.findIndex((data:any)=>data._id===updateimagedata._id)
      state.images[index]=updateimagedata;
      
      })
      .addCase(updateImageapi.rejected, (state, action: AnyAction) => {
        state.isloading = false;
        alert("Error updating image")
      })
      
  },
});

export default imgSlice.reducer;
