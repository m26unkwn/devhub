/** @format */

export default function authReducer(state, action) {
  switch (action.type) {
    case "ADD_TOKEN":
      return { ...state, token: action.payload };
    case "ADD_USER_DATA":
      return { ...state, userDetails: action.payload };
    case "ADD_LOGIN_ERROR":
      return {
        ...state,
        authError: { ...state.authError, login: action.error },
      };
    case "ADD_SIGNUP_ERROR":
      return {
        ...state,
        authError: { ...state.authError, signup: action.error },
      };
    case "LOGOUT_USER":
      return {
        ...state,
        token: "",
      };
    default:
      return state;
  }
}
