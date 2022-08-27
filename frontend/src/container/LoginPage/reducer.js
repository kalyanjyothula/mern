import { createSlice } from "@reduxjs/toolkit";

const useDetails = JSON.parse(localStorage.getItem('user'))

const initialState = { useDetails: useDetails ? useDetails : null, email: "", password: "", loading: false }

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
        useDetails: { id, email, name, token },
        isSuccess: true,
        isError: false
      }
    },
    loginUserFail(state) {
      return {
        ...state, loading: false,
        isSuccess: false,
        useDetails: null,
        isError: true
      }
    }
  }
})

export const { changeUserDetails, loginUser, loginUserSuccess, loginUserFail } = loginReducer.actions;

export const loginPageSeclector = (state) => state.loginReducer;

export default loginReducer.reducer;