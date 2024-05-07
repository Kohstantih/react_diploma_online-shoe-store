import { TCardObject } from './TCardObject';

export type TTopSalesState = {
  topSales: TCardObject[];
  isLoading: boolean;
  error: null | string;
};
