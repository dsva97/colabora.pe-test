export const ADD_PRODUCT = "ADD_SESION";
export const EDIT_PRODUCT = "EDIT_SESSION";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export interface IProduct {
  cod: string;
  name: string;
  description: string;
  image: string;
}

interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: IProduct;
}

interface EditProductAction {
  type: typeof EDIT_PRODUCT;
  payload: IProduct;
}

interface RemoveProductAction {
  type: typeof REMOVE_PRODUCT;
  payload: IProduct;
}

export type ProductActionTypes =
  | AddProductAction
  | EditProductAction
  | RemoveProductAction;
