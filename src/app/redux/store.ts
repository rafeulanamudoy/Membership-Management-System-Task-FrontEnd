import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { baseApi } from "./api/baseApi";

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer, // Root reducer with auth and baseApi reducers
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware), // Add RTK Query middleware
  });
};

// Export types for hooks
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
