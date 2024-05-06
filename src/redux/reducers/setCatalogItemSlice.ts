import { createSlice } from "@reduxjs/toolkit";

import { TCatalogItemsState } from "../../types/TCatalogItemsState";

const initialState: TCatalogItemsState = {
    items: [],
    isLoading: false,
    error: null,
    offset: 0
}

export const setCatalogItemSlice = createSlice({
    name: 'catalogItems',
    initialState,
    reducers: {
        startLoadingCatalogItems: (state) => {
            state.error = null;
            state.items = [];
            state.offset = 0;
            state.isLoading = true;
        },
        startLoadingCatalogItemsMore: (state) => {
            state.error = null;
            state.isLoading = true;
        },
        successLoadCatalogItems: (state, action) => {
            state.isLoading = false;
            state.items = action.payload;
            state.offset = action.payload.length === 6 ? state.items.length : 0;
        },
        successLoadCatalogItemsMore: (state, action) => {
            state.isLoading = false;
            state.items = [...state.items, ...action.payload];
            state.offset = action.payload.length === 6 ? state.items.length : 0;
        },
        failureLoadCatalogItems: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        resetCatalog: (state) => {
            state.items = [];
            state.isLoading = false;
            state.error = null;
            state.offset = 0;
        }
    },
})

export const {
    startLoadingCatalogItems,
    startLoadingCatalogItemsMore,
    successLoadCatalogItems,
    successLoadCatalogItemsMore,
    failureLoadCatalogItems,
    resetCatalog,
} = setCatalogItemSlice.actions;

export default setCatalogItemSlice.reducer;
