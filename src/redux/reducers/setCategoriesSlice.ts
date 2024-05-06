import { createSlice } from "@reduxjs/toolkit";

import { TCategoriesState } from "../../types/TCategoriesState";

const initialState: TCategoriesState = {
    categories: [
        {
            id: null,
            title: 'Все'
        }
    ],
    activeCategoryId: null,
    isLoading: false,
    error: null,
}

export const setCategoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        startLoadingCategories: (state) => {
            state.error = null;
            state.isLoading = true;
        },
        successLoadCategories: (state, action) => {
            state.isLoading = false;
            state.categories = [...state.categories, ...action.payload];
        },
        failureLoadCategories: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        changeActiveCategory: (state, action) => {
            state.activeCategoryId = action.payload
        },
        resetCategories: (state) => {
            state.categories = [
                {
                    id: null,
                    title: 'Все'
                }
            ];
            state.activeCategoryId = null;
            state.isLoading = false;
            state.error = null;
        }
    },
})

export const {
    startLoadingCategories,
    successLoadCategories,
    failureLoadCategories,
    changeActiveCategory,
    resetCategories,
} = setCategoriesSlice.actions;

export default setCategoriesSlice.reducer;
