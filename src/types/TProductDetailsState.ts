import { TProductDetailsObject } from "./TProductDetailsObject";

export type TProductDetailsState = {
    isActive: boolean,
    product: null | TProductDetailsObject,
    isLoading: boolean,
    error: null | string,
}