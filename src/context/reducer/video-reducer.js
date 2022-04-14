/** @format */

export const videoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_VIDEOS":
      return { ...state, videos: action.videos };
    default:
      return state;
  }
};
