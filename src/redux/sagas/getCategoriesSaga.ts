import { put, retry, takeLatest } from 'redux-saga/effects';

import { GET_CATEGORIES } from '../actions/actionTypes';
import fetchCategories from '../../API/fetchCategories';

import { TCategoriesItem } from '../../types/TCategoriesItem';
import {
  failureLoadCategories,
  startLoadingCategories,
  successLoadCategories,
} from '../reducers/setCategoriesSlice';

function* handleGetCategories() {
  yield put(startLoadingCategories());

  try {
    const retryDelay = 2 * 1000;
    const data: TCategoriesItem[] = yield retry(
      Infinity,
      retryDelay,
      fetchCategories
    );
    yield put(successLoadCategories(data));
  } catch (error: unknown) {
    if (error instanceof Error) {
      const { message } = error;
      yield put(failureLoadCategories(message));
    }
  }
}

export default function* watchGetCategories() {
  yield takeLatest(GET_CATEGORIES, handleGetCategories);
}
