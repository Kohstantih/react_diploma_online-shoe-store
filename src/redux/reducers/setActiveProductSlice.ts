import { createSlice } from '@reduxjs/toolkit';

import { TProductDetailsState } from '../../types/TProductDetailsState';

const initialState: TProductDetailsState = {
  isActive: false,
  product: null,
  isLoading: false,
  error: null,
};

export const setActiveProductSlice = createSlice({
  name: 'product/details',
  initialState,
  reducers: {
    activationProductDetails: (state) => {
      state.isActive = true;
    },
    startLoadingProductDetails: (state) => {
      state.error = null;
      state.isLoading = true;
    },
    successLoadProductDetails: (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    },
    failureLoadProductDetails: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    resetActiveProduct: (state) => {
      state.isActive = false;
      state.product = null;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const {
  activationProductDetails,
  startLoadingProductDetails,
  successLoadProductDetails,
  failureLoadProductDetails,
  resetActiveProduct,
} = setActiveProductSlice.actions;

export default setActiveProductSlice.reducer;
