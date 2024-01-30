import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./tokenSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tokenState']
};

const rootReducer = combineReducers({
  tokenState: tokenReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});
