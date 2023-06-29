import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productData from "../productdata";
import axios from "axios";
import Apiproducts from "../pages/Apiproducts";

interface Product {
  id: number;
  title: string;
  price: number;
  img: string[];
  quantity: number;
  description: string;
  rating: number;
  size: string | number;
  full: string | number;
  color: string;
  storage: string | number;
  ribbon:boolean;
  stock:number;
  category:string;
}


interface CartState {
  cart: Product[];
  wishlist: Product[];
  totalQuantity: number;
  totalPrice: number;
  searchdata:string;
  isloading:boolean;
  error:string | null,
  apiproducts:Product[];



}

const initialState: CartState = {
  cart: [],
  wishlist: [],
  totalQuantity: 0,
  totalPrice: 0,
  searchdata:"",
  isloading:false,
  error:null,
  apiproducts:[],


};

// Get action
 export const getproducts= createAsyncThunk("getproducts",async(data:any)=>{
  try{
    const response = await axios.get("http://localhost:3001/products",{
      headers:{
        "Content-Type":"application/json"
      }
    });
    return response.data

  }catch(error:any){
    return error;

  }
 })

//  Create action
export const addproducts= createAsyncThunk("addproducts",async(data)=>{
  try{
    const response = await axios.post("http://localhost:3001/products",data,{
      headers:{
        "Content-Type":"application/json"
      }
    });
    return response.data;
  }catch(error){
    return error
  }
})
// Delete action
export const deleteitem = createAsyncThunk("deleteItem", async (userId) => {
  try {
    const response = await axios.delete(`http://localhost:3001/products/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});


// Update action
export const updateitem = createAsyncThunk("updateitem",async (data)=>{
  const{id, ...productdata}:any=data
  try{
    const response = await axios.put(`http://localhost:3001/products/${id}`,productdata,{
      headers:{
        "Content-Type":"application/json"
      }
    })
    return response.data
  }catch(error){
    return error
  }
});








const productsslice = createSlice({
  name: "productsslice",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
 
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    addtowishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          console.log("carttotal", cartTotal);
          console.log("cartitem", cartItem);
          const { price, quantity } = cartItem;
          console.log(price, quantity);
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    searchproductdata:(state,action)=>{
      console.log("searchdata",action.payload)
      state.searchdata=action.payload;
    },
    removeitem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseitem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseitem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },
  
   
    deleteallitems: (state) => {
      state.cart = [];
    },
    removewishcart: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (identity) => identity.id !== action.payload
      );
    },
    deletewishcart: (state, action) => {
      state.wishlist = [];
    },
   
  },
  extraReducers:(builder)=>{
    builder
    .addCase(getproducts.pending,(state,action)=>{
      state.isloading=true;
    
    })
    .addCase(getproducts.fulfilled,(state,action)=>{
      state.isloading=false;
      state.apiproducts=action.payload
    })
    .addCase(getproducts.rejected,(state,action)=>{
      state.isloading=false;
      state.error=action.error.message || null
    })
    .addCase(addproducts.pending,(state,action)=>{
      state.isloading=true;
      
    })
    .addCase(addproducts.fulfilled,(state,action)=>{
      state.isloading=false;
      state.apiproducts.push(action.payload)
    })
    .addCase(deleteitem.pending, (state) => {
      state.isloading = true;
    })
    .addCase(deleteitem.fulfilled, (state, action) => {
      state.isloading = false;
      state.apiproducts = state.apiproducts.filter((data) => data.id !== action.payload);
    })
    .addCase(deleteitem.rejected, (state, action) => {
      state.isloading = false;
      state.error = action.error.message || null;
    })
    .addCase(updateitem.pending, (state, action) => {
      state.isloading=true;
    })
    .addCase(updateitem.fulfilled,(state,action)=>{
      state.isloading=false;
      const updateproductdata=action.payload;
      const index=state.apiproducts.findIndex((data)=>data.id===updateproductdata.id)
      state.apiproducts[index]=updateproductdata;
    })
    .addCase(updateitem.rejected,(state,action)=>{
      state.isloading=false;
      state.error=action.error.message || null;
    })

  
    
   


  }
});

export default productsslice.reducer;
export const {
  addtocart,
  removeitem,
  getCartTotal,
  increaseitem,
  decreaseitem,
  deleteallitems,
  addtowishlist,
  removewishcart,
  deletewishcart,
  searchproductdata,
} = productsslice.actions;
