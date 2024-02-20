import { createSlice } from "@reduxjs/toolkit";
import * as types from "../../Types";

import { getCategories, getMainCategories, getSubCategories } from "./categoriesFetchFunctions";

type initialStateType = {
    mainCategories: types.mainCategoryType[];
    categories: types.categoryType[];
    subCategories: types.subCategoryType[];
    //
    isLoading: true | false;
    error: boolean;
    errorMessage: null | string;
};

const initialState: initialStateType = {
    mainCategories: [],
    categories: [],
    subCategories: [],
    //
    isLoading: true,
    error: false,
    errorMessage: null,
};

// ===== products slice ===== //

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
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
                state.errorMessage = payload as string;
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
                state.errorMessage = payload as string;
            })
            // ===== get sub categories =====
            .addCase(getSubCategories.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getSubCategories.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = null;
                state.subCategories = payload.data;
            })
            .addCase(getSubCategories.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = true;
                state.errorMessage = payload as string;
            });
    },
});

export default categoriesSlice.reducer;
