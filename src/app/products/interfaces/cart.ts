import { IProduct } from './product';

export interface ICart extends IProduct {
  amount: number;
}
