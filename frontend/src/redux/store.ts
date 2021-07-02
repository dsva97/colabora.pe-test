import { createStore, combineReducers, applyMiddleware } from "redux";
import { save, load } from "redux-localstorage-simple";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import Product, { IProductState } from "./Product/reducer";

// import defaultState from "./defaultState"

export interface RootState {
  Product: IProductState;
}

const reducer = combineReducers({
  Product,
});

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(thunk, save())
)(createStore);

export const store = createStoreWithMiddleware(
  reducer,
  // defaultState,
  load()
);
