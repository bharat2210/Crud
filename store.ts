import { configureStore } from '@reduxjs/toolkit'
import userdetail from './Features/userdetail'
import authSlice from './Features/demo'
import ruserdetail from './Features/register'


export const store = configureStore({
  reducer: {
    app:userdetail,
    auth: authSlice,
    grand:ruserdetail

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch