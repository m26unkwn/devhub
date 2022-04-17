/** @format */

import { useNavigate } from "react-router-dom";
import { useAuth, useToast, useVideos } from "../../context";
import axios from "axios";
import { useState } from "react";

export const useHandler = () => {
  const { videoDispatch } = useVideos();
  const {
    authState: { token },
  } = useAuth();

  const { setToast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // this function handle all the api calls

  const serverCalls = async (
    method,
    url,
    type,
    property,
    message,
    body = null
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
      console.log("data coming from server", data);
      videoDispatch({ type, payload: data[property] });
      setToast({
        toastVarient: "success",
        message: message,
        toast: true,
      });
      setLoading(false);
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
          "ADD_VIDEO_INTO_LIKES",
          "likes",
          "Added To Likes.",
          {
            video,
          }
        )
      : navigate("/login", { state: { location } });
  };

  // this is add to unlike handler.
  // it do the operation of removing any video from like section.

  const removeFromLike = (video) => {
    serverCalls(
      "DELETE",
      `/api/user/likes/${video._Id}`,
      "ADD_VIDEO_INTO_LIKES",
      "likes",
      "Removed from like video."
    );
  };

  // this is add to watch later handler.
  // it do the operation of adding any video into watch later section.

  const addToWatchLater = (video, location) => {
    token
      ? serverCalls(
          "post",
          "/api/user/watchlater",
          "ADD_VIDEO_INTO_WATCH_LATER",
          "watchlater",
          "Added To Watch Later.",
          {
            video,
          }
        )
      : navigate("/login", { state: { location } });
  };

  // this is remove watch later handler.
  // it do the operation of removing any video from watch section.

  const removeFromWatchLater = (video) => {
    serverCalls(
      "DELETE",
      `/api/user/watchlater/${video._Id}`,
      "ADD_VIDEO_INTO_WATCH_LATER",
      "watchlater",
      "Removed from Watch Later."
    );
  };

  //it is add to history handler
  // it do the operation of adding the video into user's history.

  const addToHistory = (video) => {
    token &&
      serverCalls(
        "post",
        "/api/user/history",
        "ADD_VIDEO_INTO_HISTORY",
        "history",
        "Added To History.",
        {
          video,
        }
      );
  };

  //it is remove to history handler
  // it do the operation of   removing the video from user's history.

  const removeFromHistory = (video) => {
    serverCalls(
      "DELETE",
      `/api/user/watchlater/${video._Id}`,
      "ADD_VIDEO_INTO_HISTORY",
      "history",
      "Removed from History."
    );
  };

  const handlers = {
    addToLike,
    removeFromLike,
    removeFromWatchLater,
    addToWatchLater,
    addToHistory,
    removeFromHistory,
  };

  return [loading, handlers];
};
