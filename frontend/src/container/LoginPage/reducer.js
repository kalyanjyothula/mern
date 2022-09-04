import { createSlice } from "@reduxjs/toolkit";

const userDetails = JSON.parse(localStorage.getItem('user'))

const initialState = { userDetails: userDetails ? userDetails : null, email: "", password: "", loading: false }

const loginReducer = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    changeUserDetails(state, { payload }) {
      return { ...state, [payload.name]: payload.value }
    },
    loginUser(state) {
      return { ...state, loading: true };
    },
    loginUserSuccess(state, { id, name, email, token }) {
      return {
        ...state,
        loading: false,
        userDetails: { id, email, name, token },
        isSuccess: true,
        isError: false
      }
    },
    loginUserFail(state) {
      return {
        ...state, loading: false,
        isSuccess: false,
        userDetails: null,
        isError: true
      }
    }
  }
})

export const { changeUserDetails, loginUser, loginUserSuccess, loginUserFail } = loginReducer.actions;

export const loginPageSeclector = (state) => state.loginReducer;

export default loginReducer.reducer;