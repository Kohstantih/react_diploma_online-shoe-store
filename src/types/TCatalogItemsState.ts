import { TCardObject } from './TCardObject';

export type TCatalogItemsState = {
  items: TCardObject[];
  isLoading: boolean;
  error: null | string;
  offset: number;
};
