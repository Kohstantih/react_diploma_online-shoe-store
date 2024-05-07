import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import setTopSalesReducer from '../reducers/setTopSalesSlice';
import setCategoriesReducer from '../reducers/setCategoriesSlice';
import setCatalogItemReducer from '../reducers/setCatalogItemSlice';
import ctrlSearchFormReducer from '../reducers/ctrlSearchFormSlice';
import setActiveProductREducer from '../reducers/setActiveProductSlice';
import setCartReducer from '../reducers/setCartSlice';
import sendOrderReducer from '../reducers/sendOrderSlice';

import saga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    topSales: setTopSalesReducer,
    categories: setCategoriesReducer,
    catalog: setCatalogItemReducer,
    searchForm: ctrlSearchFormReducer,
    details: setActiveProductREducer,
    cart: setCartReducer,
    order: sendOrderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(saga);
