export interface IProductBase {
  title: string;
  description: string;
  photo: string;
  price: number;
  type: string;
}

export interface IProduct extends IProductBase {
  id: number;
  created?: string;
}

