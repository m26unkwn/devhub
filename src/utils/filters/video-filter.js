/** @format */

export const videoFilter = (videos, filter = null) =>
  filter.length > 1
    ? videos.filter(
        (video) => video.category.toUpperCase() === filter.toUpperCase()
      )
    : videos;
