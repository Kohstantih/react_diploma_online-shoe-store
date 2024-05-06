import { createSlice } from "@reduxjs/toolkit";
import { TCartState } from "../../types/TCartState";

const initialState: TCartState = {
    items: [],
    count: 0,
}

export const setCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        changeCount: (state, action) => {
            state.count = action.payload
        },
        updateItems: (state, action) => {
            state.items = action.payload;
            state.count = state.items.length
        },
        resetCart: (state) => {
            state.items = [];
            state.count = 0;
        },
    },
})

export const {
    changeCount,
    updateItems,
    resetCart
} = setCartSlice.actions;

export default setCartSlice.reducer;
