/** @format */

export const videoFilter = (videos, filter = null) => {
  if (filter === "all videos") {
    return videos;
  } else if (filter.length > 0) {
    return videos.filter(
      (video) => video.category.toUpperCase() === filter.toUpperCase()
    );
  }
  return videos;
};
// filter.length > 1
//   ? videos.filter(
//       (video) => video.category.toUpperCase() === filter.toUpperCase()
//     )
//   : videos;
