import { AnyAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

interface Product {
  _id: number;
  title: string;
  price: number;
  img: string[];
  quantity: number;
  description: string;
  rating: number;
  size: string | number;
  full: string;
  color: string;
  storage: string | number;
  ribbon: boolean;
  stock: number;
  category: string;
}

interface CartState {
  cart: Product[];
  wishlist: Product[];
  totalQuantity: number;
  totalPrice: number;
  searchdata: string;
  isloading: boolean;
  error: string | null;
  apiproducts: Product[];
}

const initialState: CartState = {
  cart: [],
  wishlist: [],
  totalQuantity: 0,
  totalPrice: 0,
  searchdata: "",
  isloading: false,
  error: null,
  apiproducts: [],
};
interface Data {
  _id: number;
  title: string;
  price: number;
  img: string[];
  quantity: number;
  description: string;
  rating: number;
  size: string | number;
  full: string;
  color: string;
  storage: string | number;
  ribbon: boolean;
  stock: number;
  category: string;
}

// Get action
export const getproducts = createAsyncThunk("getproducts", async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/getproducts", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error getting products")
  }
});

//  Create action
export const addproducts = createAsyncThunk(
  "addproducts",
  async (formdata: {
    title: any;
    price: number;
    img: string[];
    quantity: number;
    description: any;
    rating: number;
    size: any;
    full: any;
    color: any;
    storage: any;
    ribbon: any;
    stock: number;
    category: any;
  }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/createproduct",
        formdata,
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
  }
);

// Delete action
export const deleteitem = createAsyncThunk(
  "deleteItem",
  async (id: Number, data) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/deleteproduct?id=${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

// Update action
export const updateitem = createAsyncThunk(
  "updateitem",
  async (data: {
    id: {_id:number},
    productdata: {title:string; price:number; stock:number; img:string[]};
  }) => {
    const { id, ...productdata }: any = data;
    try {
      const response = await axios.put(
        `http://localhost:3000/api/updateproduct?id=${id}`,
        productdata,
        {}
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

// Updatestock
export const updatestock = createAsyncThunk(
  "updatestock",
  async (productid, data) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/stock?id=${productid}`,
        {}
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const productsslice = createSlice({
  name: "productsslice",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      let find = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
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
    searchproductdata: (state, action) => {
      console.log("searchdata", action.payload);
      state.searchdata = action.payload;
    },
    removeitem: (state, action) => {
      state.cart = state.cart.filter(
        (item: any) => item._id !== action.payload
      );
    },
    increaseitem: (state, action) => {
      state.cart = state.cart.map((item: any) => {
        if (item._id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseitem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload) {
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
        (identity) => identity._id !== action.payload
      );
    },
    deletewishcart: (state) => {
      state.wishlist = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getproducts.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(getproducts.fulfilled, (state, action) => {
        state.isloading = false;
        state.apiproducts = action.payload;
      })
      .addCase(getproducts.rejected, (state, action: AnyAction) => {
        state.isloading = false;
        alert("Error in Getting Products")
      })
      .addCase(addproducts.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(addproducts.fulfilled, (state, action) => {
        state.isloading = false;
        state.apiproducts.push(action.payload);
      })
      .addCase(addproducts.rejected, (state, action: AnyAction) => {
        state.isloading = false;
        alert("Error in Adding Products")
      })
      .addCase(deleteitem.pending, (state) => {
        state.isloading = true;
      })
      .addCase(deleteitem.fulfilled, (state, action) => {
        state.isloading = false;
        state.apiproducts = state.apiproducts.filter(
          (data: Data) => data._id !== action.payload
        );
      })
      .addCase(deleteitem.rejected, (state, action: AnyAction) => {
        state.isloading = false;
        alert("Error in Deleting Products")
      })
      .addCase(updateitem.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(updateitem.fulfilled, (state, action) => {
        state.isloading = false;
        const updateproductdata = action.payload;
        const index = state.apiproducts.findIndex(
          (data: any) => data._id === updateproductdata._id
        );
        state.apiproducts[index] = updateproductdata;
      })
      .addCase(updateitem.rejected, (state, action) => {
        state.isloading = false;
        alert("Error in Updating Products")
      })
      .addCase(updatestock.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(updatestock.fulfilled, (state, action) => {
        state.isloading = false;
      })
      .addCase(updatestock.rejected, (state, action: AnyAction) => {
        state.isloading = false;
      alert("Error in Updating Stock");
      });
  },
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
