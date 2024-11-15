import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice"; // Use the default export
import { baseApi } from "./api/baseApi";

const rootReducer = combineReducers({
  auth: authReducer, // Correctly pass the reducer
  [baseApi.reducerPath]: baseApi.reducer, // Keep the baseApi reducer
});

export default rootReducer;
