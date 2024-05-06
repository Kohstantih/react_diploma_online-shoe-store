import { delay, put, retry, takeLatest } from 'redux-saga/effects';

import { GET_SEARCH_RESULT } from '../actions/actionTypes';
import fetchSearch from '../../API/fetchSearch';
import { failureLoadCatalogItems, startLoadingCatalogItems, successLoadCatalogItems } from '../reducers/setCatalogItemSlice';

import { TCardObject } from '../../types/TCardObject';
import { PayloadAction } from '@reduxjs/toolkit';
import { TSearchArgs } from '../../types/TSearchArgs';

function *handleGetSearchResult(action: PayloadAction<TSearchArgs>) {
    yield delay(1000);
    yield put(startLoadingCatalogItems());

    try {
        const retryDelay = 2 * 1000;
        const data: TCardObject[] = yield retry(3, retryDelay, fetchSearch, action.payload);
        yield put(successLoadCatalogItems(data));
    } catch (error: unknown) {
        if ( error instanceof Error) {
            const { message } = error;
            yield put(failureLoadCatalogItems(message));
        }        
    }
}

export default function* watchGetSearchResult() {
    yield takeLatest(GET_SEARCH_RESULT, handleGetSearchResult)
}
