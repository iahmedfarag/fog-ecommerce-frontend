import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import generalSlice from "./generalSlice";
import categoriesSlice from "./categories/categoriesSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsReducer,
        general: generalSlice
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch