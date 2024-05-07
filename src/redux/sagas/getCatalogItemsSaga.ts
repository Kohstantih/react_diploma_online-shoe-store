import { put, retry, takeLatest } from 'redux-saga/effects';

import { GET_CATALOG_ITEMS } from '../actions/actionTypes';
import fetchCatalogItems from '../../API/fetchCatalogItems';
import {
  failureLoadCatalogItems,
  startLoadingCatalogItems,
  successLoadCatalogItems,
} from '../reducers/setCatalogItemSlice';

import { TCardObject } from '../../types/TCardObject';
import { PayloadAction } from '@reduxjs/toolkit';

function* handleGetCatalogItems(action: PayloadAction<number | null>) {
  yield put(startLoadingCatalogItems());

  try {
    const retryDelay = 2 * 1000;
    const data: TCardObject[] = yield retry(
      1,
      retryDelay,
      fetchCatalogItems,
      action.payload
    );
    yield put(successLoadCatalogItems(data));
  } catch (error: unknown) {
    if (error instanceof Error) {
      const { message } = error;
      yield put(failureLoadCatalogItems(message));
    }
  }
}

export default function* watchGetCatalogItems() {
  yield takeLatest(GET_CATALOG_ITEMS, handleGetCatalogItems);
}
