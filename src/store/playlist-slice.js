/** @format */

import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
  name: "playlist",
  initialState: [],
  reducers: {
    addPlaylist(state, action) {
      state = action.payload;
      return state;
    },
    addVideoIntoPlaylist(state, action) {
      state.filter((playlist) => {
        if (playlist._id === action.payload._id) {
          playlist.videos = action.payload.videos;
        }
        return playlist;
      });
    },
    clearPlayListState(state) {
      state = [];
      return state;
    },
  },
});

const playlistAction = playlistSlice.actions;
const playlistReducer = playlistSlice.reducer;

export { playlistAction, playlistReducer };
