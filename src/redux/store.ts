import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import modalReducer from "./productModalSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
