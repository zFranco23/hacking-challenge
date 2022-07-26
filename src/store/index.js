import { applyMiddleware, compose, createStore } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./config";

const composeEnhancers =
  //eslint-disable-next-line
  (process.env.NODE_ENV !== "production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
