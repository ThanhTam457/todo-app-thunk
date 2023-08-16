import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof userReducer>