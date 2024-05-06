import {
    GET_TOP_SALES,
    GET_CATEGORIES,
    GET_CATALOG_ITEMS,
    GET_CATALOG_ITEMS_MORE,
    GET_SEARCH_RESULT,
    GET_PRODUCT_DETAILS,
    SEND_ORDER,
} from './actionTypes'

import { TOrderItemObject } from '../../types/TOrderItemObject'
import { TOwnerObject } from '../../types/TOwnerObject'

export const getTopSales = () => ({
    type: GET_TOP_SALES
})

export const getCategories = () => ({
    type: GET_CATEGORIES
})

export const getCatalogItems = (id : null | number) => ({
    type: GET_CATALOG_ITEMS,
    payload: id
})

export const getCatalogItemsMore = (offset: number, id: number | null, search: string | null) => ({
    type: GET_CATALOG_ITEMS_MORE,
    payload: { offset, id, search }
})

export const getSearchResult = (search: string, id: number | null, offset: number) => ({
    type: GET_SEARCH_RESULT,
    payload: { search, id, offset }
})

export const getProductDetails = (id : string) => ({
    type: GET_PRODUCT_DETAILS,
    payload: id
})

export const sendOrder = (owner: TOwnerObject, items: TOrderItemObject[]) => ({
    type: SEND_ORDER,
    payload: { owner, items }
})
