/** @format */

export const videoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_VIDEOS":
      return { ...state, videos: action.videos };
    case "ADD_FILTER":
      return { ...state, filters: action.filter };
    default:
      return state;
  }
};
