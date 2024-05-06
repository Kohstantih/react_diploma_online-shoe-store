import { TCategoriesItem } from "./TCategoriesItem";

export type TCategoriesState = {
    categories: TCategoriesItem[],
    activeCategoryId: number | null,
    isLoading: boolean,
    error: null | string,
}