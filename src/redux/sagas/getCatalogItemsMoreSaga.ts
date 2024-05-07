import { put, retry, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { GET_CATALOG_ITEMS_MORE } from '../actions/actionTypes';
import fetchCatalogItemsMore from '../../API/fetchCatalogItemsMore';
import {
  failureLoadCatalogItems,
  startLoadingCatalogItemsMore,
  successLoadCatalogItemsMore,
} from '../reducers/setCatalogItemSlice';

import { TCardObject } from '../../types/TCardObject';
import { TGetCatalogItemsMoreArgs } from '../../types/TGetCatalogItemsMoreArgs';

function* handleGetCatalogItemsMore(
  action: PayloadAction<TGetCatalogItemsMoreArgs>
) {
  yield put(startLoadingCatalogItemsMore());

  try {
    const retryDelay = 2 * 1000;
    const data: TCardObject[] = yield retry(
      3,
      retryDelay,
      fetchCatalogItemsMore,
      action.payload
    );
    yield put(successLoadCatalogItemsMore(data));
  } catch (error: unknown) {
    if (error instanceof Error) {
      const { message } = error;
      yield put(failureLoadCatalogItems(message));
    }
  }
}

export default function* watchGetCatalogItemsMore() {
  yield takeLatest(GET_CATALOG_ITEMS_MORE, handleGetCatalogItemsMore);
}
