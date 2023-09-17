import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { baseUrl } from "../../utils/customFetch"

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