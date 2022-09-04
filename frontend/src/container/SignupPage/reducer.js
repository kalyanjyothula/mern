import { createSlice } from "@reduxjs/toolkit";

const userDetails = JSON.parse(localStorage.getItem("user"));

const initialState = {
  userDetails: userDetails ? userDetails : null,
  loading: false,
  isSuccess: userDetails ? true : false,
  isError: false,
};

const signupReducer = createSlice({
  name: "signup",
  initialState: initialState,
  reducers: {
    changeUserDetails(state, { payload }) {
      return {
        ...state,
        userDetails: { ...state.userDetails, [payload.name]: payload.value },
      };
    },
    createUserAccount(state, { payload }) {
      return {
        ...state,
        loading: true,
        isSuccess: false,
        isError: false,
      };
    },
    createUserAccountSuccess(state, { payload }) {
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isError: false,
      };
    },
    createUserAccountFail(state) {
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isError: true,
      };
    },
  },
});

export const {
  changeUserDetails,
  createUserAccount,
  createUserAccountSuccess,
  createUserAccountFail,
} = signupReducer.actions;

export const signupPageSelector = (state) => state.signupReducer;

export default signupReducer.reducer;
