import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


interface CategoryType {
  _id: number;
  imgPath: string;
  title: string;
  description: string;
}
interface CategoryState {
  categories: CategoryType[];
  isloading: boolean;
  error: string | null;
}
const initialState: CategoryState = {
  categories: [],
  isloading: false,
  error: null,
};

// Get Category action
export const getCategoryAction = createAsyncThunk(
  "getCategoryAction",
  async (data) => {
    try {
      const response = await axios.get("http://localhost:3000/api/getCategory");
      return response.data;
    } catch (error) {
      throw new Error("Error getting categories");
    }
  }
);

// Add Category action
export const addCategoryAction = createAsyncThunk(
  "addCategoryAction",
  async (
    data: { imgPath: string; title: string; description: string },
    { rejectWithValue }
  ) => {
    // console.log("data Category",data)
    try {
      const response = await axios.post(
        "http://localhost:3000/api/addCategory",
        data,
      
      );
      return response.data;
    } catch (error) {
      throw new Error("Error in Adding Category");
    }
  }
);
// Delete Category action
export const deleteCategoryAction = createAsyncThunk(
  "deleteCategoryAction",
  async (id:number, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/deleteCategory?id=${id}`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Update Category action
export const updateCategoryAction = createAsyncThunk(
  "updateCategoryAction",
  async (data:{id:{id:number};updatedCategory:CategoryType}, thunkAPI) => {
    const { id, ...updatedCategory }: any = data;
    try {
      const response = await axios.put(
        `http://localhost:3000/api/updateCategory?id=${id}`,
        updatedCategory,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(addCategoryAction.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(addCategoryAction.fulfilled, (state, action) => {
        state.isloading = false;
        state.categories.push(action.payload);
      })
      .addCase(addCategoryAction.rejected, (state, action) => {
        state.isloading = false;
        alert("Error in Adding Category");
      })
      .addCase(getCategoryAction.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(getCategoryAction.fulfilled, (state, action) => {
        state.isloading = false;
        state.categories = action.payload;
      })
      .addCase(getCategoryAction.rejected, (state, action) => {
        state.isloading = false;
        alert("Error in Getting Categories");
      })
      .addCase(deleteCategoryAction.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(deleteCategoryAction.fulfilled, (state, action) => {
        state.isloading = false;
        state.categories = state.categories.filter(
          (data) => data._id !== action.payload
        );
      })
      .addCase(deleteCategoryAction.rejected, (state, action) => {
        state.isloading = false;
     
        alert("Error in deleting Category");
      })
      .addCase(updateCategoryAction.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(updateCategoryAction.fulfilled, (state, action) => {
        state.isloading = false;
        const updata = action.payload;
        const index = state.categories.findIndex(
          (data) => data._id === updata._id
        );
        state.categories[index] = updata;
      })
      .addCase(updateCategoryAction.rejected, (state, action) => {
        state.isloading = false;
        alert("Error in updating Category");
      });
  },
});
export default categorySlice.reducer;
