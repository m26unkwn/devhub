/** @format */

import { createContext, useContext, useReducer } from "react";
import { videoReducer } from "../reducer/video-reducer";

const VideoContext = createContext();

const intialVideoState = {
  videos: [],
  filters: "",
  playlists: [],
  likes: [],
  watchLater: [],
  history: [],
};

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(
    videoReducer,
    intialVideoState
  );
  const value = {
    videoState,
    videoDispatch,
  };
  return (
    <VideoContext.Provider value={value}>{children}</VideoContext.Provider>
  );
};

const useVideos = () => useContext(VideoContext);
export { VideoProvider, useVideos };
