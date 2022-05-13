/** @format */

export const videoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_VIDEOS":
      return { ...state, videos: action.videos };
    case "ADD_FILTER":
      return { ...state, filters: action.filter };
    case "ADD_VIDEO_INTO_LIKES":
      return { ...state, likes: action.payload };
    case "ADD_VIDEO_INTO_WATCH_LATER":
      return { ...state, watchLater: action.payload };
    case "ADD_VIDEO_INTO_HISTORY":
      return { ...state, history: action.payload };
    case "ADD_PLAYLIST":
      return { ...state, playlists: action.payload };
    case "ADD_VIDEO_INTO_PLAYLIST":
      const filterPlaylist = state.playlists.filter((playlist) => {
        if (playlist._id === action.payload._id) {
          playlist.videos = action.payload.videos;
        }
        return playlist;
      });
      return { ...state, playlists: filterPlaylist };
    case "CLEAR_ALL_DATA_FROM_STATE":
      return {
        ...state,
        filters: "",
        playlists: [],
        likes: [],
        watchLater: [],
        history: [],
      };
    default:
      return state;
  }
};
