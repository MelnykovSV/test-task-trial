import { configureStore } from "@reduxjs/toolkit";
import { favoriteCarsReducer } from "./favoriteCars/carsSlice";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "FavoriteCars",
  storage,
  whitelist: ["favoriteCars"],
};

const customMiddleWare = (store) => (next) => (action) => {
  next(action);
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(persistConfig, favoriteCarsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(customMiddleWare),
});

export const persistor = persistStore(store);
