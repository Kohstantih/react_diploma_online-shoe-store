import { spawn } from "redux-saga/effects";

import watchGetTopSales from "./getTopSalesSaga";
import watchGetCategories from "./getCategoriesSaga";
import watchGetCatalogItems from "./getCatalogItemsSaga";
import watchGetCatalogItemsMore from "./getCatalogItemsMoreSaga";
import watchGetSearchResult from "./getSearchResultSaga";
import watchGetProductDetails from "./getProductDetailsSaga";
import watchSendOrderSaga from "./sendOrderSaga";

export default function* saga() {
    yield spawn(watchGetTopSales);
    yield spawn(watchGetCategories);
    yield spawn(watchGetCatalogItems);
    yield spawn(watchGetCatalogItemsMore);
    yield spawn(watchGetSearchResult);
    yield spawn(watchGetProductDetails);
    yield spawn(watchSendOrderSaga);
}
