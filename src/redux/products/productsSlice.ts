import { createSlice } from "@reduxjs/toolkit";
import * as types from "../../Types";

import {
    getProducts, getNewProducts,
    getBestProducts, getSubCategoryProducts, getSingleProduct, getFilterProductsObjects, getEventProducts
} from "./productsFetchFunctions";


interface initialStateType {
    products: types.productType[],
    pages: number | null,
    count: number | null,
    filters: {
        show?: number,
        sort?: string,
        model?: string,
        brand?: string,
        color?: string,
        releaseYear?: string,
        currentPage?: number,
        subCategory?: string | null

    },
    filtersObject: {
        brands?: string[],
        models?: string[],
        colors?: string[],
        price?: { min?: number, max?: number },
        releaseYear?: string[],
    },
    singleProduct: {
        current: types.productType | null,
        prevProduct: types.productType | null,
        nextProduct: types.productType | null
    }
    bestProducts: types.productType[],
    newProducts: types.productType[],
    subCategoryProducts: types.productType[],
    searchedProducts: types.productType[],
    eventProducts: types.productType[],
    productsPerRow: 4 | 3 | 1,
    //
    isLoading: true | false,
    error: boolean,
    errorMessage: null | string
}

const initialState: initialStateType = {
    // all products
    products: [],// shows in all products page - effect them by fitlering
    pages: null, // how many pages avaialble from products to make the pagination
    count: null, // how many products per page
    filters: { // filter array to effect the products
        show: 9,
        sort: 'default',
        model: 'all',
        brand: 'all',
        color: 'all',
        releaseYear: 'all',
        currentPage: 1,
        subCategory: null
    },
    filtersObject: { // filters objects
        brands: [],
        models: [],
        colors: [],
        price: {},
        releaseYear: []
    },
    singleProduct: { // single product
        current: null,
        prevProduct: null,
        nextProduct: null,
    },
    bestProducts: [], // best products section
    newProducts: [], // new products section
    subCategoryProducts: [], // sub category products
    searchedProducts: [], // searched products from search bar
    eventProducts: [],
    productsPerRow: 4,
    //
    isLoading: true,
    error: false,
    errorMessage: null
}




// ===== products slice ===== //

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        // ! clear searched products from state //
        clearSeachedProducts: (state) => {
            state.searchedProducts = []
        },

        //! filters
        filterProducts: (state, { payload }) => {
            let tempFilters = {}
            tempFilters = { ...state.filters, ...payload }
            state.filters = tempFilters
        },
        changeProductsPerRow: (state, { payload }) => {
            state.productsPerRow = payload
        }
    },
    extraReducers: (builder) => {
        builder
            // !===== get products ===== //
            .addCase(getProducts.pending, (state, action) => {
                state.error = false;
                if (action?.meta?.arg?.type === 'search') {
                    return
                } else {
                    state.isLoading = true;
                }
            })
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                if (payload?.type === 'filter') {
                    state.isLoading = false;
                    state.errorMessage = null;
                    state.count = payload?.data.count
                    state.pages = payload?.data.pages
                    state.products = payload?.data.data;
                } if (payload?.type === 'search') {
                    state.searchedProducts = payload.data.data
                }
            })
            .addCase(getProducts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = true;
                state.errorMessage = payload as string
            })
            // !===== get single product ===== //
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
            // !===== get best products ===== //
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
            // !===== get new products ===== //
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
            // !===== get subcategory products ===== //
            .addCase(getSubCategoryProducts.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getSubCategoryProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = null;
                state.products = payload.data;
            })
            .addCase(getSubCategoryProducts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = true;
                state.errorMessage = payload as string
            })
            // !===== get event products ===== //
            .addCase(getEventProducts.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getEventProducts.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = null;
                state.eventProducts = payload.data;
            })
            .addCase(getEventProducts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = true;
                state.errorMessage = payload as string
            })
            // !===== get products filter object ===== //
            .addCase(getFilterProductsObjects.pending, (state) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(getFilterProductsObjects.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.errorMessage = null;
                state.filtersObject = payload.data
            })
            .addCase(getFilterProductsObjects.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = true;
                state.errorMessage = payload as string
            })


    }
})


export const { clearSeachedProducts, filterProducts, changeProductsPerRow } = productsSlice.actions

export default productsSlice.reducer