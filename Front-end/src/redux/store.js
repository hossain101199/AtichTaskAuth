import { configureStore } from "@reduxjs/toolkit";
import { API } from "./api/apiSlice";
import authSlice from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [API.reducerPath]: API.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware),
});
