import {
  IProduct,
  ProductActionTypes,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  REMOVE_PRODUCT,
} from "./types";

export interface IProductState {
  [cod_product: string]: IProduct;
}
const initialState: IProductState = {};

function reducer(state = initialState, { type, payload }: ProductActionTypes) {
  const product = payload;
  let newState: IProductState = {};

  switch (type) {
    case ADD_PRODUCT:
    case EDIT_PRODUCT:
      newState = { ...state };
      newState[product.cod] = product;
      return newState;
    case REMOVE_PRODUCT:
      newState = { ...state };
      delete newState[product.cod];
      return newState;
    default:
      return state;
  }
}

export default reducer;
