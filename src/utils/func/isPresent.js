/** @format */

export const isPresent = (videos, videoId) =>
  videos.some((video) => video._Id === videoId);
