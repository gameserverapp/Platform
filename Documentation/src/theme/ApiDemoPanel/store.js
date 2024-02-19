import { configureStore, combineReducers } from "@reduxjs/toolkit";
import accept from "./Accept/slice";
import auth from "./Authorization/slice";
import body from "./Body/slice";
import contentType from "./ContentType/slice";
import params from "./ParamOptions/slice";
import response from "./Response/slice";
import server from "./Server/slice";
const rootReducer = combineReducers({
  accept,
  contentType,
  response,
  server,
  body,
  params,
  auth,
});
export const createStoreWithState = (preloadedState, middlewares) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(...middlewares),
  });
