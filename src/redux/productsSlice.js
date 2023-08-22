import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../utils/customFetch"


const initialState = {
    mainCategories: [],
    categories: [],
    subCategories: [],
    products: [],

    isLoading: true,
    error: null,
    sidebar: false
}



// ===== get main categories ===== //
export const getMainCategories = createAsyncThunk("mainCategories", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await baseUrl.get("/mainCategories")
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

// ===== get categories ===== //
export const getCategories = createAsyncThunk("categories", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await baseUrl.get("/categories")
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

// ===== get sub categories ===== //
export const getSubCategories = createAsyncThunk("subCategories", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await baseUrl.get("/subCategories")
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

// ===== get products ===== //
export const getProducts = createAsyncThunk("products", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await baseUrl.get("/products")
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        openSidebar: (state) => {
            state.sidebar = true
        },
        closeSidebar: (state) => {
            state.sidebar = false
        }
    },
    extraReducers: (builder) => {
        builder
            // ===== get categories =====
            .addCase(getMainCategories.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getMainCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.mainCategories = payload.data;
            })
            .addCase(getMainCategories.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            // ===== get categories =====
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.categories = payload.data;
            })
            .addCase(getCategories.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            // ===== get sub categories =====
            .addCase(getSubCategories.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getSubCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.subCategories = payload.data;
            })
            .addCase(getSubCategories.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            // ===== get products ===== //
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.products = payload.data;
            })
            .addCase(getProducts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
    }
})


export const { openSidebar, closeSidebar } = productsSlice.actions

export default productsSlice.reducer