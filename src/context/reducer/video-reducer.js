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

    default:
      return state;
  }
};
