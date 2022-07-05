import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";
import rootReducer from "./";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["message", "dialog"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}).concat(logger)
  });
  let persistor = persistStore(store);
  return { store, persistor };
};
