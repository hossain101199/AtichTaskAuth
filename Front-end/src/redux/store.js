import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import { API } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [API.reducerPath]: API.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware),
});
