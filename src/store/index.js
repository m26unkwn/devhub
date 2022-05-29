/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth-slice";
import { playlistReducer } from "./playlist-slice";
import { videoReducer } from "./video-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videoReducer,
    playlist: playlistReducer,
  },
});
