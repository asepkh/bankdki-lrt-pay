import { createWrapper } from "next-redux-wrapper";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import user from "./user/reducer";

const rootReducer = {
  user,
};

const reducer = combineReducers(rootReducer);
export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
