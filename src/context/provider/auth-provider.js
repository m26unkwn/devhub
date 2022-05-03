/** @format */

import axios from "axios";
import { createContext, useReducer, useContext } from "react";
import authReducer from "../reducer/auth-reducer";
import { useVideos } from "./video-provider";

const AuthContext = createContext();

const initialAuthState = {
  token: "",
  userDetails: "",
  authError: {
    login: "",
    signup: "",
  },
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);
  const { videoDispatch } = useVideos();

  const getUserLogin = async (email, password) => {
    try {
      let {
        data: { encodedToken, foundUser },
      } = await axios({
        method: "post",
        url: "/api/auth/login",
        data: { email, password },
      });
      localStorage.setItem(
        "userData",
        JSON.stringify({
          token: encodedToken,
          foundUser: foundUser,
        })
      );

      authDispatch({
        type: "ADD_TOKEN",
        payload: encodedToken,
      });
      authDispatch({
        type: "ADD_USER_DATA",
        payload: {
          firstName: foundUser.firstName,
          email: foundUser.email,
          lastName: foundUser.lastName,
        },
      });
      videoDispatch({
        type: "ADD_VIDEO_INTO_LIKES",
        payload: foundUser.likes,
      });
      videoDispatch({
        type: "ADD_VIDEO_INTO_HISTORY",
        payload: foundUser.history,
      });
      videoDispatch({
        type: "ADD_VIDEO_INTO_PLAYLIST",
        payload: foundUser.playlist,
      });
      videoDispatch({
        type: "ADD_VIDEO_INTO_WATCH_LATER",
        payload: foundUser.watchlater,
      });
    } catch ({
      response: {
        data: { error },
        status,
      },
    }) {
      if (status === 404) {
        authDispatch({
          type: "ADD_LOGIN_ERROR",
          error: "Email is not present",
        });
      } else if (status === 401) {
        authDispatch({
          type: "ADD_LOGIN_ERROR",
          error: "Email or  Password is not present",
        });
      }
      console.log(error, status);
    }
  };

  const getUserSignUp = async (email, password, firstName, lastName) => {
    try {
      let {
        data: { encodedToken, createdUser },
      } = await axios({
        method: "post",
        url: "/api/auth/login",
        data: {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
        },
      });
      localStorage.setItem(
        "userData",
        JSON.stringify({
          token: encodedToken,
          foundUser: createdUser,
        })
      );
      authDispatch({
        type: "ADD_TOKEN",
        payload: encodedToken,
      });
      authDispatch({
        type: "ADD_USER_DATA",
        payload: createdUser,
      });
      videoDispatch({
        type: "ADD_VIDEO_INTO_LIKES",
        payload: createdUser.likes,
      });
      videoDispatch({
        type: "ADD_VIDEO_INTO_HISTORY",
        payload: createdUser.history,
      });
      videoDispatch({
        type: "ADD_VIDEO_INTO_PLAYLIST",
        payload: createdUser.playlist,
      });
      videoDispatch({
        type: "ADD_VIDEO_INTO_WATCH_LATER",
        payload: createdUser.watchlater,
      });
    } catch ({
      response: {
        data: { error },
        status,
      },
    }) {
      if (status === 422) {
        authDispatch({
          type: "ADD_SIGNUP_ERROR",
          error: "Email is already exist.",
        });
      }
      console.log(error[0]);
    }
  };

  const logoutUser = (e, navigate) => {
    e.preventDefault();
    authDispatch({ type: "LOGOUT_USER" });
    videoDispatch({ type: "CLEAR_ALL_DATA_FROM_STATE" });
    localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        getUserLogin,
        logoutUser,
        getUserSignUp,
        authState,
        authDispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
