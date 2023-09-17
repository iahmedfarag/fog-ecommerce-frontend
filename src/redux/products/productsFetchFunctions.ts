import axios from "axios"
import { baseUrl } from "../../utils/customFetch"
import { createAsyncThunk } from "@reduxjs/toolkit"

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

// ===== get event products ===== //
export const getEventProducts = createAsyncThunk("event-products", async (id: string | undefined, thunkAPI) => {
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

type getProdctsPropsTypes = {
    type: string,
    filters?: {
        show?: number, // d
        sort?: string, // d
        model?: string, // d
        brand?: string, // d
        color?: string, // d
        currentPage?: number, // d
        price?: { min?: number, max?: number }, //d
        subCategory?: string | null
    },
    search?: string
}

// ===== get products ===== //
export const getProducts = createAsyncThunk("products", async (props: getProdctsPropsTypes | null, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    let params = {}
    if (props) {
        if (props.type === 'filter') {
            params = {
                filter: {
                    brand: props.filters?.brand === 'all' ? null : props.filters?.brand,
                    model: props.filters?.model === 'all' ? null : props.filters?.model,
                    colors: props.filters?.color === 'all' ? null : props.filters?.color,
                    price: props.filters?.price,
                    subCategory: props.filters?.subCategory
                },
                sort: props.filters?.sort === 'default' ? "" : props.filters?.sort,
                limit: props.filters?.show,
                page: props.filters?.currentPage,
            }
        } if (props.type === "search") {
            params = {
                search: props.search
            }
        }
    }
    try {
        const res = await baseUrl.get("/products", { params })
        return { data: res.data, type: props?.type }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
        } else {
            console.error(error);
        }
    }
})

// ===== get filter objects ===== //

export const getFilterProductsObjects = createAsyncThunk("filter-products-object", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
        const res = await baseUrl.get(`/products/filter`)
        return res.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
        } else {
            console.error(error);
        }
    }
})