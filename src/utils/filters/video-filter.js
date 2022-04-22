/** @format */

export const videoFilter = (videos, filter = null) => {
  if (filter === "allvideos") {
    return videos;
  } else if (filter.length > 0) {
    return videos.filter(
      (video) => video.category.toUpperCase() === filter.toUpperCase()
    );
  }
  return videos;
};
