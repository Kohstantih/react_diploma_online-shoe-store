import { createSlice } from "@reduxjs/toolkit";

import { TCtrlSearchFormState } from "../../types/TCtrlSearchFormState";

const initialState: TCtrlSearchFormState = {
    value: '',
}

export const ctrlSearchFormSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.value = action.payload
        },
    },
})

export const {
    setSearchValue,
} = ctrlSearchFormSlice.actions;

export default ctrlSearchFormSlice.reducer;
