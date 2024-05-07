import { put, retry, takeLatest } from 'redux-saga/effects';

import { GET_TOP_SALES } from '../actions/actionTypes';
import fetchTopSales from '../../API/fetchTopSales';
import {
  failureLoadTopSales,
  startLoadingTopSales,
  successLoadTopSales,
} from '../reducers/setTopSalesSlice';

import { TCardObject } from '../../types/TCardObject';

function* handleGetTopSalesSaga() {
  yield put(startLoadingTopSales());

  try {
    const retryDelay = 2 * 1000;
    const data: TCardObject[] = yield retry(3, retryDelay, fetchTopSales);
    yield put(successLoadTopSales(data));
  } catch (error: unknown) {
    if (error instanceof Error) {
      const { message } = error;
      yield put(failureLoadTopSales(message));
    }
  }
}

export default function* watchGetTopSales() {
  yield takeLatest(GET_TOP_SALES, handleGetTopSalesSaga);
}
