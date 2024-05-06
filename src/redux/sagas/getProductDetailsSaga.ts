import { put, retry, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { GET_PRODUCT_DETAILS } from '../actions/actionTypes';
import fetchProductDetails from '../../API/fetchProductDetails';
import { failureLoadProductDetails, startLoadingProductDetails, successLoadProductDetails } from '../reducers/setActiveProductSlice';

import { TProductDetailsObject } from '../../types/TProductDetailsObject';

function *handleGetProductDetails(action: PayloadAction<string>) {
    yield put(startLoadingProductDetails());

    try {
        const retryDelay = 2 * 1000;
        const data: TProductDetailsObject = yield retry(3, retryDelay, fetchProductDetails, action.payload);
        yield put(successLoadProductDetails(data));
    } catch (error: unknown) {
        if ( error instanceof Error) {
            const { message } = error;
            put(failureLoadProductDetails(message));
        }        
    }
}

export default function* watchGetProductDetails() {
    yield takeLatest(GET_PRODUCT_DETAILS, handleGetProductDetails)
}
