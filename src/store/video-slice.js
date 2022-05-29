/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  likes: [],
  watchLater: [],
  history: [],
  filters: "",
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    addVideos(state, action) {
      state.videos = action.payload;
    },
    addToLike(state, action) {
      state.likes = action.payload;
    },
    addToWatchLater(state, action) {
      state.watchLater = action.payload;
    },
    addToHistory(state, action) {
      state.history = action.payload;
    },
    addFilters(state, action) {
      state.filters = action.payload;
    },
    clearVideoState(state) {
      state = {
        ...state,
        likes: [],
        watchLater: [],
        history: [],
        filters: "",
      };
      return state;
    },
  },
});

const videoAction = videoSlice.actions;

const videoReducer = videoSlice.reducer;

export { videoAction, videoReducer };
