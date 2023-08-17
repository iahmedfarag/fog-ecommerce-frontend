import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../utils/customFetch"


const initialState = {
    products: [],
    categories: [],
    isLoading: true,
    error: null,
}

// get products
export const getProducts = createAsyncThunk("products", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await baseUrl.get("/products")
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


// get categories
export const getCategories = createAsyncThunk("categories", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await baseUrl.get("/categories")
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // get products
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.products = payload.products;
            })
            .addCase(getProducts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            // get categories
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                console.log(payload)
                state.categories = payload.categoriesArr;
            })
            .addCase(getCategories.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
})



export default productsSlice.reducer