import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./anime.slice";

export const store = configureStore({
  reducer: {
    animeReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;