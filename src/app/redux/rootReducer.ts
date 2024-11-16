import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice"; // Use the default export
import { baseApi } from "./api/baseApi";
import toggleReducer from "./features/toggle/toggleSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  toggle: toggleReducer,
  [baseApi.reducerPath]: baseApi.reducer, // Keep the baseApi reducer
});

export default rootReducer;
