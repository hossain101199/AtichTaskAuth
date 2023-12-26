import { combineReducers } from "@reduxjs/toolkit";
import { API } from "./api/apiSlice";
import authSlice from "./features/auth/authSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  [API.reducerPath]: API.reducer,
});

export default rootReducer;
