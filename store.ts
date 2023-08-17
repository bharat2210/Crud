import { configureStore } from "@reduxjs/toolkit";
import userdetail from "./Features/userdetail";
import authSlice from "./Features/demo";
import ruserdetail from "./Features/register";
import productsslice from "./Features/productsslice";

import pinslice  from './Features/pin';
import messageSlice from './Features/message'
import imgSlice from './Features/imageCarousel'
import categorySlice from './Features/Category'
import OfferSlice from './Features/Offers'
import PeopleSlice from './Features/crud'



export const store = configureStore({
  reducer: {
    app: userdetail,
    auth: authSlice,
    grand: ruserdetail,
    allcarts: productsslice,
    allcode:pinslice,
    allmessages:messageSlice,
    allimages:imgSlice,
    allcategories:categorySlice,
    alloffers:OfferSlice,
    allpeople:PeopleSlice
 
    

  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
