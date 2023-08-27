import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../utils/customFetch"
import axios from "axios";
import * as types from "../Types";




type initialStateType = {
    mainCategories: types.mainCategoryType[],
    categories: types.categoryType[],
    subCategories: types.subCategoryType[],
    products: types.productType[],
    isLoading: true | false,
    error: boolean,
    errorMessage: null | string
}

const initialState: initialStateType = {
    mainCategories: [],
    categories: [],
    subCategories: [],
    products: [],

    isLoading: true,
    error: false,
    errorMessage: null
}



// ===== get main categories ===== //
export const getMainCategories = createAsyncThunk("mainCategories", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await baseUrl.get("/mainCategories")
        return res.data
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
        } else {
            console.error(error);
        }
    }
})

// ===== get categories ===== //
export const getCategories = createAsyncThunk("categories", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await baseUrl.get("/categories")
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
        } else {
            console.error(error);
        }
    }
})

// ===== get sub categories ===== //
export const getSubCategories = createAsyncThunk("subCategories", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await baseUrl.get("/subCategories")
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
        } else {
            console.error(error);
        }
    }
})

// ===== get products ===== //
export const getProducts = createAsyncThunk("products", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await baseUrl.get("/products")
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
        } else {
            console.error(error);
        }
    }
})

// ===== products slice ===== //

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            // ===== get categories =====
            .addCase(getMainCategories.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getMainCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = null;
                state.mainCategories = payload.data;
            })
            .addCase(getMainCategories.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = true;
                state.errorMessage = payload as string
            })
            // ===== get categories =====
            .addCase(getCategories.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = null;
                state.categories = payload.data;
            })
            .addCase(getCategories.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = true;
                state.errorMessage = payload as string
            })
            // ===== get sub categories =====
            .addCase(getSubCategories.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getSubCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = null;
                state.subCategories = payload.data
            })
            .addCase(getSubCategories.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = true;
                state.errorMessage = payload as string
            })
            // ===== get products ===== //
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = null;
                state.products = payload.data;
            })
            .addCase(getProducts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = true;
                state.errorMessage = payload as string
            })
    }
})



export default productsSlice.reducer