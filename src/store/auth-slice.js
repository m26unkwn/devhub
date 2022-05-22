/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  token: "",
  userDetails: "",
  authError: {
    login: "",
    signup: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    addToken(state, action) {
      state.token = action.payload;
    },
    addUserDetails(state, action) {
      state.userDetails = action.payload;
    },
    addLoginError(state, action) {
      state.authError.login = action.payload;
    },
    addSignUpError(state, action) {
      state.authError.signup = action.payload;
    },
    logoutUser(state) {
      state = {
        token: "",
        userDetails: "",
        authError: {
          login: "",
          signup: "",
        },
      };
      return state;
    },
  },
});

const authReducer = authSlice.reducer;

const authAction = authSlice.actions;
export { authAction, authReducer };
