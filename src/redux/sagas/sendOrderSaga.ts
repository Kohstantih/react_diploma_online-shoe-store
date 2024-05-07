import { put, retry, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { SEND_ORDER } from '../actions/actionTypes';
import fetchSendOrder from '../../API/fetchSendOrder';

import {
  startSendingOrder,
  successSendingOrder,
  failureSendingOrder,
} from '../reducers/sendOrderSlice';
import { TOrderSendObject } from '../../types/TOrderSendObject';

function* handleSendOrderSaga(action: PayloadAction<TOrderSendObject>) {
  yield put(startSendingOrder());

  try {
    const retryDelay = 2 * 1000;
    const response: boolean = yield retry(
      1,
      retryDelay,
      fetchSendOrder,
      action.payload
    );
    if (response) yield put(successSendingOrder());
    else throw new Error('Не удалось отправить заказ');
  } catch (error: unknown) {
    if (error instanceof Error) {
      const { message } = error;
      yield put(failureSendingOrder(message));
    }
  }
}

export default function* watchSendOrderSaga() {
  yield takeLatest(SEND_ORDER, handleSendOrderSaga);
}
