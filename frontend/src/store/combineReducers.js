import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../container/App/reducer";
import loginReducer from "../container/LoginPage/reducer";

export const reducer = combineReducers({
  user: userReducer,
  loginReducer: loginReducer,
});
