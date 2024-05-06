import { createSlice } from "@reduxjs/toolkit";

import { TOrderSendState } from "../../types/TOrderSendState";

const initialState: TOrderSendState = {
    isSuccessFul: false,
    isLoading: false,
    error: null,
}

export const sendOrderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        startSendingOrder: (state) => {
            state.error = null;
            state.isLoading = true;
        },
        successSendingOrder: (state) => {
            state.isLoading = false;
            state.isSuccessFul = true;
        },
        failureSendingOrder: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        resetSendingOrder: (state) => {
            state.isSuccessFul = false;
            state.isLoading = false;
            state.error = null;
        }
    },
})

export const {
    startSendingOrder,
    successSendingOrder,
    failureSendingOrder,
    resetSendingOrder
} = sendOrderSlice.actions;

export default sendOrderSlice.reducer;
