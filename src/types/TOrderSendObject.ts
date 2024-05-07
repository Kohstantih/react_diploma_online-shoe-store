import { TOrderItemObject } from './TOrderItemObject';
import { TOwnerObject } from './TOwnerObject';

export type TOrderSendObject = {
  owner: TOwnerObject;
  items: TOrderItemObject[];
};
