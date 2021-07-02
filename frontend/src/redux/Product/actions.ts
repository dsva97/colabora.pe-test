import {
  IProduct,
  EDIT_PRODUCT,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ProductActionTypes,
} from "./types";

export function addProduct(product: IProduct): ProductActionTypes {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
}

export function editProduct(product: IProduct): ProductActionTypes {
  return {
    type: EDIT_PRODUCT,
    payload: product,
  };
}

export function removeProduct(product: IProduct): ProductActionTypes {
  return {
    type: REMOVE_PRODUCT,
    payload: product,
  };
}
