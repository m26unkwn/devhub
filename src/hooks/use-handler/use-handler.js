/** @format */

import { useNavigate } from "react-router-dom";
import { useToast } from "../../context";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../store/auth-slice";
import { videoAction } from "../../store/video-slice";
import { playlistAction } from "../../store/playlist-slice";

export const useHandler = () => {
  const token = useSelector((store) => store.auth.token);

  const { setToast, setLoading } = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // this function handle all the api calls

  const serverCalls = async (
    method,
    url,
    action,
    property,
    message,
    body = null,
  ) => {
    const headers = { authorization: token };
    try {
      setLoading(true);
      const { data } = await axios({
        method: method,
        url: url,
        data: body,
        headers: headers,
      });
      dispatch(action(data[property]));
      setToast({
        toastVarient: "success",
        message: message,
        toast: true,
      });
      setLoading(false);
      if (message === "PLAYLIST DELETED") {
        navigate("/playlist");
      }
      if (url === "/api/user/playlists") {
        return data;
      }
    } catch (error) {
      setToast({
        toast: true,
        toastVarient: "failure",
        message: "Something went wrong!!",
      });
      console.log("errror", error);
      setLoading(false);
    }
  };

  // this is add to like handler.
  // it do the operation of adding any video into like section.

  const addToLike = (video, location) => {
    token
      ? serverCalls(
          "post",
          "/api/user/likes",
          videoAction.addToLike,
          "likes",
          "Added To Likes.",
          {
            video,
          },
        )
      : navigate("/login", { state: { location: location } });
  };

  // this is add to unlike handler.
  // it do the operation of removing any video from like section.

  const removeFromLike = (id) => {
    serverCalls(
      "DELETE",
      `/api/user/likes/${id}`,
      videoAction.addToLike,
      "likes",
      "Removed from like video.",
    );
  };

  // this is add to watch later handler.
  // it do the operation of adding any video into watch later section.

  const addToWatchLater = (video, location) => {
    token
      ? serverCalls(
          "post",
          "/api/user/watchlater",
          videoAction.addToWatchLater,
          "watchlater",
          "Added To Watch Later.",
          {
            video,
          },
        )
      : navigate("/login", { state: { location: location } });
  };

  // this is remove watch later handler.
  // it do the operation of removing any video from watch section.

  const removeFromWatchLater = (id) => {
    serverCalls(
      "DELETE",
      `/api/user/watchlater/${id}`,
      videoAction.addToWatchLater,
      "watchlater",
      "Removed from Watch Later.",
    );
  };

  //it is add to history handler
  // it do the operation of adding the video into user's history.

  const addToHistory = (video) => {
    token &&
      serverCalls(
        "post",
        "/api/user/history",
        videoAction.addToHistory,
        "history",
        "Added To History.",
        {
          video,
        },
      );
  };

  //it is remove to history handler
  // it do the operation of   removing the video from user's history.

  const removeFromHistory = (id) => {
    serverCalls(
      "DELETE",
      `/api/user/history/${id}`,
      videoAction.addToHistory,
      "history",
      "Removed from History.",
    );
  };

  const clearAllHistory = () => {
    serverCalls(
      "DELETE",
      `/api/user/history/all`,
      videoAction.addToHistory,
      "history",
      "Cleared All History.",
    );
  };

  //playlistSection

  const removePlaylist = (playlistId) => {
    serverCalls(
      "delete",
      `/api/user/playlists/${playlistId}`,
      playlistAction.addPlaylist,
      "playlists",
      "PLAYLIST DELETED",
    );
  };

  const addVideoIntoPlaylist = (id, video) => {
    token &&
      serverCalls(
        "post",
        `/api/user/playlists/${id}`,
        playlistAction.addVideoIntoPlaylist,
        "playlist",
        "Added to playlist.",
        {
          video: video,
        },
      );
  };
  const createPlaylist = async (playlist, video) => {
    let playListId = playlist.id;
    let result = await serverCalls(
      "post",
      "/api/user/playlists",
      playlistAction.addPlaylist,
      "playlists",
      "PLAYLIST CREATED.",
      {
        playlist: playlist,
      },
    );
    const id = result.playlists.find((playlist) => playlist.id === playListId);
    addVideoIntoPlaylist(id._id, video);
  };

  const removeVideofromPlaylist = (playlistid, videoid) => {
    serverCalls(
      "delete",
      `/api/user/playlists/${playlistid}/${videoid}`,
      playlistAction.addVideoIntoPlaylist,
      "playlist",
      "REMOVE FROM PLAYLIST.",
    );
  };

  // userLogin

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
        }),
      );

      dispatch(authAction.addToken(encodedToken));
      dispatch(
        authAction.addUserDetails({
          firstName: foundUser.firstName,
          email: foundUser.email,
          lastName: foundUser.lastName,
        }),
      );
      dispatch(videoAction.addToLike(foundUser.likes));
      dispatch(videoAction.addToHistory(foundUser.history));
      dispatch(videoAction.addToWatchLater(foundUser.watchlater));
      dispatch(playlistAction.addPlaylist(foundUser.playlist));
    } catch ({
      response: {
        data: { error },
        status,
      },
    }) {
      if (status === 404) {
        dispatch(authAction.addLoginError("Email is not present"));
      } else if (status === 401) {
        dispatch(
          authAction.addSignUpError("Email or  Password is not present"),
        );
      }
      console.log(error, status);
    }
  };

  // signup user

  const getUserSignUp = async (email, password, firstName, lastName) => {
    try {
      let {
        data: { encodedToken, createdUser },
      } = await axios({
        method: "post",
        url: "/api/auth/signup",
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
        }),
      );

      dispatch(authAction.addToken(encodedToken));
      dispatch(
        authAction.addUserDetails({
          firstName: createdUser.firstName,
          email: createdUser.email,
          lastName: createdUser.lastName,
        }),
      );
      dispatch(videoAction.addToLike(createdUser.likes));
      dispatch(videoAction.addToHistory(createdUser.history));
      dispatch(videoAction.addToWatchLater(createdUser.watchlater));
      dispatch(playlistAction.addPlaylist(createdUser.playlist));
    } catch ({
      response: {
        data: { error },
        status,
      },
    }) {
      if (status === 422) {
        dispatch(authAction.addSignUpError("Email already exist."));
      }
      console.log(error[0]);
    }
  };

  // logout user

  const logoutUser = (e, navigate) => {
    e.preventDefault();
    localStorage.removeItem("userData");
    dispatch(authAction.logoutUser());
    dispatch(videoAction.clearVideoState());
    dispatch(playlistAction.clearPlayListState());

    navigate("/");
  };

  const handlers = {
    addToLike,
    removeFromLike,
    removeFromWatchLater,
    addToWatchLater,
    addToHistory,
    removeFromHistory,
    createPlaylist,
    removePlaylist,
    addVideoIntoPlaylist,
    removeVideofromPlaylist,
    clearAllHistory,
    getUserLogin,
    logoutUser,
    getUserSignUp,
  };

  return [handlers];
};
