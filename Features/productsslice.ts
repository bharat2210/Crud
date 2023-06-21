import { createSlice } from "@reduxjs/toolkit";
import productData from "../productdata";

interface Product {
  id: number;
  title: string;
  price: number;
  img: string;
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
  items: Product[];
  totalQuantity: number;
  totalPrice: number;
  searchdata:string
}

const initialState: CartState = {
  cart: [],
  wishlist: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
  searchdata:""
};

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
    decreasestock: (state, action) => {
      state.items=state.items.map((valuestock)=>{
        if(valuestock.id===action.payload){
          return {...valuestock, stock:valuestock.stock -1}
        }
        return valuestock
      })
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
  decreasestock,
  searchproductdata,
} = productsslice.actions;
