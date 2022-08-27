import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    userData: "",
  },
  reducers: {
    getUser() {},
    setUser(state, action) {
      const userData = action.payload;
      return { ...state, ...userData };
    },
  },
});

export const { getUser, setUser } = userReducer.actions;

export default userReducer.reducer;
