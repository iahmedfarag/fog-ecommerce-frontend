import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../utils/customFetch"
import axios from "axios";
import * as types from "../Types";




type initialStateType = {
    mainCategories: types.mainCategoryType[],
    categories: types.categoryType[],
    subCategories: types.subCategoryType[],
    products: types.productType[],
    singleProduct: {
        current: types.productType | null,
        prevProduct: types.productType | null,
        nextProduct: types.productType | null
    }
    bestProducts: types.productType[],
    newProducts: types.productType[],
    subCategoryProducts: types.productType[],
    //
    isLoading: true | false,
    error: boolean,
    errorMessage: null | string
}

const initialState: initialStateType = {
    mainCategories: [],
    categories: [],
    subCategories: [],
    products: [],
    singleProduct: {
        current: null,
        prevProduct: null,
        nextProduct: null,
    },
    bestProducts: [],
    newProducts: [],
    subCategoryProducts: [],

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

// ===== get single product ===== //
export const getSingleProduct = createAsyncThunk("single-product", async (id: string | undefined, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await baseUrl.get(`/products/${id}/single`)
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
        } else {
            console.error(error);
        }
    }
})

// ===== get best products ===== //
export const getBestProducts = createAsyncThunk("best-products", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await baseUrl.get(`/products/best`)
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
        } else {
            console.error(error);
        }
    }
})

// ===== get new products ===== //
export const getNewProducts = createAsyncThunk("new-products", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await baseUrl.get(`/products/new`)
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
        } else {
            console.error(error);
        }
    }
})

// ===== get subcategory products ===== //
export const getSubCategoryProducts = createAsyncThunk("subcategory-products", async (id: string | undefined, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await baseUrl.get(`/products/${id}/subcategory`)
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
            // ===== get single product ===== //
            .addCase(getSingleProduct.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getSingleProduct.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = null;
                state.singleProduct = payload.data;
            })
            .addCase(getSingleProduct.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = true;
                state.errorMessage = payload as string
            })
            // ===== get best products ===== //
            .addCase(getBestProducts.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getBestProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = null;
                state.bestProducts = payload.data;
            })
            .addCase(getBestProducts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = true;
                state.errorMessage = payload as string
            })
            // ===== get new products ===== //
            .addCase(getNewProducts.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getNewProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = null;
                state.newProducts = payload.data;
            })
            .addCase(getNewProducts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = true;
                state.errorMessage = payload as string
            })
            // ===== get subcategory products ===== //
            .addCase(getSubCategoryProducts.pending, (state) => {
                // state.isLoading = true;
                state.error = false;
            })
            .addCase(getSubCategoryProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = null;
                state.subCategoryProducts = payload.data;
            })
            .addCase(getSubCategoryProducts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = true;
                state.errorMessage = payload as string
            })
    }
})



export default productsSlice.reducer