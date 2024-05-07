import { createSlice } from '@reduxjs/toolkit';

import { TTopSalesState } from '../../types/TTopSalesState';

const initialState: TTopSalesState = {
  topSales: [],
  isLoading: false,
  error: null,
};

export const setTopSalesSlice = createSlice({
  name: 'topSales',
  initialState,
  reducers: {
    startLoadingTopSales: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    successLoadTopSales: (state, action) => {
      state.isLoading = false;
      state.topSales = action.payload;
    },
    failureLoadTopSales: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    resetTopSales: (state) => {
      state.topSales = [];
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  startLoadingTopSales,
  successLoadTopSales,
  failureLoadTopSales,
  resetTopSales,
} = setTopSalesSlice.actions;

export default setTopSalesSlice.reducer;
